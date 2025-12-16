---
sidebar_position: 3
---

# Generate a WhatsApp Token
**Estimated Time: 3 minutes**

Follow these steps to generate a token for WhatsApp API access:

## Access System Users Page
   - Visit the [System Users page](https://business.facebook.com/settings/system-users) on Facebook Business.
   - If you manage multiple business portfolios, click on the relevant Business Portfolio name.

## Create a New System User
   - Click on **Add** to create a new user. Accept the meta policy for non discrimination.
   - Enter a name for the system user and assign them the **Admin** role.

## Assign Assets
   - Click on **Assign assets**. 

   ![Meta App Manage](/img/whatsapp/meta-assign-assets.png)
   - Under the **Apps** section, find and select your app. (Image below)
   - Ensure you check the **Manage app** option. (Image below)


   - **Save Changes**

## Generate the Token
   - Go to the "System users" tab
   - Click on **Generate token**.

   ![WhatsApp System User Token](/img/whatsapp/meta-generate-token.webp)

   - Choose your app from the list and click next.
   - Set the token expiration to **Never**. Click next.

   ![WhatsApp System User Token](/img/whatsapp/whatsapp-token-expiration-never.webp)

   - Select the following permissions:
     - **whatsapp_business_messaging**
     - **whatsapp_business_management**
   - Click **Generate Token** to generate the token.


## Copy Your Token
   - Copy the token that appears on the screen.

Ensure you store the generated token securely, as it provides essential access to your WhatsApp services.
