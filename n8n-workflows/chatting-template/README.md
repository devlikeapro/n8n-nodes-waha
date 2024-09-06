# Chatting Template
[Template](https://raw.githubusercontent.com/devlikeapro/n8n-nodes-waha/master/n8n-workflows/chatting-template/template.json)

![](workflow.png)

Simple chatting template that replies with "pong" if received "ping" and sends an image if received "image".

## How it works
When receive a new message on WhatsApp session - **send seen** always and based on message:
- **Send back "pong"** if message is **"ping"**
- **Send back an image** if message is **"image"**

## Set up steps
- **Import from URL** template
- Configure **WAHA API** credentials and select it for all WAHA nodes
- Get **Webhook URL** (production one) from **WAHA Trigger** node
- Configure you **WAHA session** to send webhooks with `message` type to the **Webhook URL**
- **Active** your workflow in n8n
- Send "image" or "ping" to the WhatsApp account from another one and see the magic!

## Send QR code for authorization to Email
[Template](https://raw.githubusercontent.com/devlikeapro/n8n-nodes-waha/master/n8n-workflows/WAHA___Send_QR_to_Email.json)

![](../send-qr-code-to-email/WAHA___Send_QR_to_Email.png)

Send QR code to the email when session it's in `SCAN_QR_CODE` status.

### How it works
When session status is `SCAN_QR_CODE` - it fetches the QR code and sends it to the Email.

### Set up steps
- **Import from URL** template
- Configure **WAHA API** credentials and select it for all WAHA nodes
- Configure **Email** node with your **from** and **to** email (requires **SMTP credentials** as well)
- **Active** your workflow in n8n
- Get **Webhook URL** (production one) from **WAHA Trigger** node
- Start a new session with **Webhook URL** configured for `session.status` event
- and see the QR code in your email!
