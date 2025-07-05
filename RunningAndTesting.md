# Running and Testing the WeSpark Project

## 1. Backend (Node.js/Express API)

**Setup:**
```bash
cd backend
npm install
```

**Run:**
```bash
npm start
```
- The backend API will be available at http://localhost:3000

**Test:**
- Use Postman, curl, or your frontend/mobile app to send requests to endpoints like `/feedback` or `/api/feedback`.

Here are the commands/steps to test the backend API endpoints:

- Using curl

> Test GET request:

```BASH
curl http://localhost:3000/feedback
```

>Test POST request to submit feedback:

```BASH
curl -X POST http://localhost:3000/feedback \
  -H "Content-Type: application/json" \
  -d '{"rating": 5, "comment": "Great experience!"}'
```

> Alternative POST endpoint (if using /api/feedback):

```BASH
curl -X POST http://localhost:3000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{"rating": 4, "comment": "Good learning opportunity"}'
```

> or:

> or

```BASH
# GET request
curl -X GET http://localhost:3000/

# POST with JSON data
curl -X POST http://localhost:3000/api/endpoint \
  -H "Content-Type: application/json" \
  -d '{"key": "value"}'

# With headers and verbose output
curl -X GET http://localhost:3000/ \
  -H "Authorization: Bearer token" \
  -v
  ```

- Using HTTPie

```BASH
http GET localhost:3000
```

or

```BASH
# GET request
http GET localhost:3000

# POST with JSON
http POST localhost:3000/api/endpoint key=value

# With headers
http GET localhost:3000 Authorization:"Bearer token"

# Upload file
http POST localhost:3000/upload < file.json
```

- Using Postman

>GET Request:
> 1. Open Postman
> 2. Create new request
> 3. Set method to GET
> 4. Enter URL: http://localhost:3000/feedback
> 5. Click Send

> POST Request:
> 1. Create new request
> 2. Set method to POST
> 3. Enter URL: http://localhost:3000/feedback
> 4. Go to Headers tab, add: Content-Type: application/json
> 5. Go to Body tab, select "raw" and "JSON"
> 6. Enter JSON data:
```JSON
{
  "rating": 5,
  "comment": "Test feedback from Postman"
}
```
> 7. Click Send

> - Expected Responses
>   - GET: Should return existing feedback > data (array of feedback objects)

>   - POST: Should return success message or the created feedback object

>   - Check backend/feedback.json file to verify data persistence

---

## 2. Web Dashboard (Angular)

**Setup:**
```bash
cd web-dashboard
npm install
```

**Run:**
```bash
ng serve
```
- The Angular app will be available at http://localhost:4200

**Test:**
- Open http://localhost:4200 in your browser.
- Ensure the Angular app is configured to use the backend API URL (http://localhost:3000).

---

## 3. Mobile App (.NET MAUI)

**Setup:**
- Open `mobile-app/WeSparkApp/WeSparkApp.csproj` in Visual Studio 2022 (Windows) or Visual Studio for Mac.
- Ensure .NET MAUI workloads are installed.
- Restore NuGet packages if prompted.

**Configure API Endpoint:**
- In your app code or settings, set the backend API URL to http://localhost:3000 (or your backend's address).

**Run:**
- Select your target platform (Android/iOS/Windows/macOS).
- Build and deploy to an emulator or device.

**Test:**
- Use the app UI to submit feedback (rating and comment).
- Check that submissions appear in the backend (and in `feedback.json`).

---

## General Notes

- Make sure the backend is running before testing the web or mobile apps.
- For API testing, you can use Postman or curl directly.
- For the web dashboard, use your browser.
- For the mobile app, use an emulator or physical device.
