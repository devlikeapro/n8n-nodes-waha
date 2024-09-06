# N8N WAHA Workflows Examples
You can import the workflows:
1. Go to your n8n installation with installed **WAHA** node.
2. **Add workflow** there (just empty one)
3. Import one of the [**examples**](#examples) by clicking on three dots **...** at the right top corner
	 of the n8n window and selecting **Import from URL**.
4. Paste the url to import workflow
5. Select credentials for all WAHA nodes
6. Configure you session to send event to **WAHA Trigger** Webhook URL
7. Activate the workflow
8. Enjoy low-code automation!


# Workflows Templates

<!-- toc -->

- [Chatting Template](#chatting-template)
  * [How it works](#how-it-works)
  * [Set up steps](#set-up-steps)
- [Send QR code for authorization to Email](#send-qr-code-for-authorization-to-email)
  * [How it works](#how-it-works-1)
  * [Set up steps](#set-up-steps-1)

<!-- tocstop -->

## Chatting Template
[Template](https://raw.githubusercontent.com/devlikeapro/n8n-nodes-waha/master/n8n-workflows/WAHA___Chatting_Template.json)

![](WAHA___Chatting_Template.png)

Simple chatting template that replies with "pong" if received "ping" and sends an image if received "image".

### How it works
When receive a new message on WhatsApp session - **send seen** always and based on message:
- **Send back "pong"** if message is **"ping"**
- **Send back an image** if message is **"image"**

### Set up steps
- **Import from URL** template
- Configure **WAHA API** credentials and select it for all WAHA nodes
- Get **Webhook URL** (production one) from **WAHA Trigger** node
- Configure you **WAHA session** to send webhooks with `message` type to the **Webhook URL**
- **Active** your workflow in n8n
- Send "image" or "ping" to the WhatsApp account from another one and see the magic!

## Send QR code for authorization to Email
[Template](https://raw.githubusercontent.com/devlikeapro/n8n-nodes-waha/master/n8n-workflows/WAHA___Send_QR_to_Email.json)

![](WAHA___Send_QR_to_Email.png)

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
