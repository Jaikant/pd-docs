---
title: Function Calling
sidebar_position: 2
---

# Function Calling

**Estimated Time: 5 minutes**

Function calling enables your AI agents to connect with external APIs, databases, and services. When users ask questions or make requests that require real-time data or actions, your agent can call predefined functions to fulfill these needs.

## How Function Calling Works

1. **User Interaction** - A user asks something that requires external data or action
2. **Function Selection** - The AI determines which function(s) to call based on the conversation
3. **API Request** - Predictable Dialogs makes an HTTP request to your endpoint with the function parameters
4. **Response Integration** - The API response is incorporated into the AI's final answer to the user

## Primary Use Cases

### 1. Data Collection
Capture information from conversations for business purposes.

**Examples:**
- Lead generation forms
- Survey and feedback collection
- Contact information gathering
- Appointment scheduling

### 2. Action Triggers
Initiate processes or workflows based on user interactions.

**Examples:**
- Send confirmation emails
- Create support tickets
- Update CRM records
- Trigger notifications

### 3. Information Retrieval
Fetch real-time or personalized data to enhance responses.

**Examples:**
- Order status lookups
- Weather information
- Account balance queries
- Inventory checks

## HTTP Methods

### GET Requests
Best for retrieving information without side effects.

- Parameters sent as query parameters in the URL
- Suitable for data lookups and searches
- Cached by browsers and proxies for better performance

**Example:**
```
GET https://api.weather.com/forecast?location=San Francisco&units=metric
```

### POST Requests  
Best for sending data or triggering actions.

- Parameters sent in the request body (typically JSON)
- Suitable for creating records, sending data, or complex operations
- Not cached, allowing for real-time processing

**Example:**
```
POST https://api.company.com/leads
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "interest": "Enterprise Plan"
}
```

## Authentication & Security

### Bearer Token Authentication
The most common authentication method for APIs.

**How it works:**
1. Obtain an API key from your service provider
2. Configure it as a Bearer Token in Predictable Dialogs
3. The token is included in the `Authorization` header of each request

**Security benefits:**
- Encrypted storage of your API keys
- Secure transmission over HTTPS
- Token-based access control

### Best Practices
- Use HTTPS endpoints only
- Implement proper rate limiting on your APIs
- Validate and sanitize all incoming function parameters
- Log function calls for monitoring and debugging
- Use environment-specific endpoints (dev/staging/production)

## Function Design Patterns

### Input Validation
Always validate parameters before processing:

```json
{
  "name": "create_lead",
  "parameters": {
    "type": "object",
    "properties": {
      "email": {
        "type": "string",
        "format": "email"
      },
      "phone": {
        "type": "string",
        "pattern": "^\\+?[1-9]\\d{1,14}$"
      }
    },
    "required": ["email"]
  }
}
```

### Error Handling
Design your endpoints to return helpful error messages:

```json
{
  "success": false,
  "error": "Invalid email address format",
  "code": "VALIDATION_ERROR"
}
```

### Response Structure
Use consistent response formats:

```json
{
  "success": true,
  "data": {
    "order_id": "12345",
    "status": "shipped",
    "tracking": "1Z999AA1234567890"
  }
}
```

## Performance Considerations

### Response Time
- Target endpoint response times under 3 seconds
- Implement timeouts on your endpoints (30 seconds maximum)
- Consider caching for frequently requested data

### Rate Limiting
- Monitor API usage to avoid hitting rate limits
- Implement exponential backoff for retries
- Consider function call frequency in your agent design

### Token Usage
- Function calls consume tokens for both input parameters and response data
- Monitor token usage in session logs
- Optimize response sizes for frequently called functions

## Testing and Debugging

### Function Testing
1. Test functions individually with sample parameters
2. Verify authentication and error handling
3. Test edge cases and invalid inputs
4. Monitor response times under load

### Session Monitoring
Review function call details in session logs:
- Function name and parameters sent
- Endpoint response and status codes
- Request duration and token usage
- Error messages and debugging information

## Provider-Specific Implementation

### OpenAI Assistant
Function calling is fully supported and production-ready.
- Configure functions on the OpenAI platform
- Import functions into Predictable Dialogs
- Set up endpoints and authentication

**Learn more:** [OpenAI Assistant Function Calling →](/docs/providers/openai-assistant/function-calling)

### OpenAI Resources
Function calling capabilities are currently in development.
- Coming soon with similar functionality
- Will support custom function schemas
- Easy migration path from OpenAI Assistant

**Learn more:** [OpenAI Functions Status →](/docs/providers/openai/functions)

## Common Patterns

### Progressive Data Collection
Break complex forms into conversational steps:

1. **Initial Contact** - Collect basic information (name, email)
2. **Qualification** - Gather specific needs or interests  
3. **Detailed Info** - Collect additional details if qualified
4. **Confirmation** - Verify information before submission

### Conditional Logic
Use function responses to guide conversation flow:

```
User: "What's my order status?"
→ Function: get_order_status(email="user@example.com")
→ Response: Order shipped, tracking provided
→ AI: "Great news! Your order has shipped..."
```

### Error Recovery
Handle API errors gracefully:

```
→ Function call fails
→ AI: "I'm having trouble accessing your account right now. 
      Could you try again in a few minutes, or would you 
      prefer to speak with a human agent?"
```

## Next Steps

- **Choose Your Provider:** [OpenAI Assistant →](/docs/providers/openai-assistant/create-resource) for immediate function calling
- **Design Your Functions:** Plan your API endpoints and authentication
- **Test Thoroughly:** Verify function behavior before deploying to users