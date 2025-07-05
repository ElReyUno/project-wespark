using System.Text;
using System.Text.Json;
using WeSparkApp.Configuration;

namespace WeSparkApp;

public partial class MainPage : ContentPage
{
	int count = 0;
	private readonly HttpClient httpClient;

	public MainPage()
	{
		InitializeComponent();
		httpClient = new HttpClient();
		httpClient.Timeout = TimeSpan.FromSeconds(AppConfig.HttpTimeoutSeconds);
	}

	private async void OnCounterClicked(object sender, EventArgs e)
	{
		count++;

		if (count == 1)
			CounterBtn.Text = $"Clicked {count} time";
		else
			CounterBtn.Text = $"Clicked {count} times";

		SemanticScreenReader.Announce(CounterBtn.Text);

		// Track the click event to the backend
		await TrackClickAsync("CounterBtn");
	}

	private async Task TrackClickAsync(string elementName)
	{
		try
		{
			var clickData = new
			{
				element = elementName,
				timestamp = DateTime.UtcNow.ToString("O"),
				count = count
			};

			var json = JsonSerializer.Serialize(clickData);
			var content = new StringContent(json, Encoding.UTF8, "application/json");

			var response = await httpClient.PostAsync(AppConfig.GetApiUrl(AppConfig.ClicksEndpoint), content);
			
			if (response.IsSuccessStatusCode)
			{
				System.Diagnostics.Debug.WriteLine($"Click tracked successfully: {elementName}");
			}
		}
		catch (Exception ex)
		{
			System.Diagnostics.Debug.WriteLine($"Error tracking click: {ex.Message}");
		}
	}
}

