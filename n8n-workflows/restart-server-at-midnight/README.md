# Restart server at midnight
[Template](https://raw.githubusercontent.com/devlikeapro/n8n-nodes-waha/master/n8n-workflows/restart-server-at-midnight/template.json)

![](workflow.png)


### How it works
When the time is midnight - it sends a `POST /api/server/stop` request to the 
WAHA API and docker container stops and then starts again.

### Set up steps
- **Import from URL** template
- Configure **WAHA API** credentials and select it for all WAHA nodes
- Configure **Email** node with your **from** and **to** email (requires **SMTP credentials** as well)
- **Active** your workflow in n8n
- Enjoy the automation! 
