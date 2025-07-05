namespace WeSparkApp.Configuration
{
    public static class AppConfig
    {
        // API Configuration
        // For local development: use your machine's IP address
        // For production: replace with your deployed backend URL
        public const string ApiBaseUrl = "http://192.168.0.152:3000";
        
        // API Endpoints
        public const string FeedbackEndpoint = "/api/feedback";
        public const string ClicksEndpoint = "/api/clicks";
        
        // App Settings
        public const int HttpTimeoutSeconds = 30;
        public const string AppName = "WeSpark";
        public const string AppVersion = "1.0.0";
        
        // Get full API URL for a specific endpoint
        public static string GetApiUrl(string endpoint)
        {
            return $"{ApiBaseUrl}{endpoint}";
        }
    }
}
