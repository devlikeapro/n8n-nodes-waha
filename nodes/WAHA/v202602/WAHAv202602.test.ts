import { WAHAv202602 } from './WAHAv202602';

test('WAHAv202602.description.properties', () => {
	const node = new WAHAv202602();
	const expected = [
	{
		"displayName": "Resource",
		"name": "resource",
		"type": "options",
		"noDataExpression": true,
		"options": [
			{
				"name": "🖥️ Sessions",
				"value": "Sessions",
				"description": "Control WhatsApp sessions (accounts)"
			},
			{
				"name": "📱 Pairing",
				"value": "Pairing",
				"description": "Pair a session with WhatsApp on your phone."
			},
			{
				"name": "🆔 Profile",
				"value": "Profile",
				"description": "Your profile information"
			},
			{
				"name": "📤 Chatting",
				"value": "Chatting",
				"description": "Chatting methods"
			},
			{
				"name": "✅ Presence",
				"value": "Presence",
				"description": "Presence information"
			},
			{
				"name": "📢 Channels",
				"value": "Channels",
				"description": "Channels (newsletters) methods"
			},
			{
				"name": "🟢 Status",
				"value": "Status",
				"description": "Status (aka stories) methods"
			},
			{
				"name": "💬 Chats",
				"value": "Chats",
				"description": "Chats methods"
			},
			{
				"name": "🔑 Api Keys",
				"value": "Api Keys",
				"description": "API Keys management"
			},
			{
				"name": "👤 Contacts",
				"value": "Contacts",
				"description": "Contacts methods.<br>\n                Use phone number (without +) or phone number and `@c.us` at the end as `contactId`.<br>\n                'E.g: `12312312310` OR `12312312310@c.us`<br>"
			},
			{
				"name": "👥 Groups",
				"value": "Groups",
				"description": "Groups methods.<br>"
			},
			{
				"name": "📞 Calls",
				"value": "Calls",
				"description": "Call handling methods"
			},
			{
				"name": "📅 Events",
				"value": "Events",
				"description": "Event Message"
			},
			{
				"name": "🏷️ Labels",
				"value": "Labels",
				"description": "Labels - available only for WhatsApp Business accounts"
			},
			{
				"name": "🖼️ Media",
				"value": "Media",
				"description": "Media methods"
			},
			{
				"name": "🧩 Apps",
				"value": "Apps",
				"description": "Applications (built-in integrations)"
			},
			{
				"name": "🔍 Observability",
				"value": "Observability",
				"description": "Other methods"
			},
			{
				"name": "🗄️ Storage",
				"value": "Storage",
				"description": "Storage methods"
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				]
			}
		},
		"options": [
			{
				"name": "Get QR",
				"value": "Get QR",
				"action": "Get QR code for pairing WhatsApp API.",
				"description": "Get QR code for pairing WhatsApp API.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/auth/qr"
					}
				}
			},
			{
				"name": "Request Code",
				"value": "Request Code",
				"action": "Request authentication code.",
				"description": "Request authentication code.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/auth/request-code"
					}
				}
			},
			{
				"name": "Screenshot",
				"value": "Screenshot",
				"action": "Get a screenshot of the current WhatsApp session (**WEBJS** only)",
				"description": "Get a screenshot of the current WhatsApp session (**WEBJS** only)",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/screenshot"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				]
			}
		},
		"options": [
			{
				"name": "Create",
				"value": "Create",
				"action": "Create a new API key",
				"description": "Create a new API key",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/keys"
					}
				}
			},
			{
				"name": "List",
				"value": "List",
				"action": "Get all API keys",
				"description": "Get all API keys",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/keys"
					}
				}
			},
			{
				"name": "Update",
				"value": "Update",
				"action": "Update an API key",
				"description": "Update an API key",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/keys/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete",
				"value": "Delete",
				"action": "Delete an API key",
				"description": "Delete an API key",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/keys/{{$parameter[\"id\"]}}"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				]
			}
		},
		"options": [
			{
				"name": "List",
				"value": "List",
				"action": "List all sessions",
				"description": "List all sessions",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/sessions"
					}
				}
			},
			{
				"name": "Create",
				"value": "Create",
				"action": "Create a session",
				"description": "Create session a new session (and start it at the same time if required).",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sessions"
					}
				}
			},
			{
				"name": "Get",
				"value": "Get",
				"action": "Get session information",
				"description": "Get session information",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/sessions/{{$parameter[\"session\"]}}"
					}
				}
			},
			{
				"name": "Update",
				"value": "Update",
				"action": "Update a session",
				"description": "Update a session",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/sessions/{{$parameter[\"session\"]}}"
					}
				}
			},
			{
				"name": "Delete",
				"value": "Delete",
				"action": "Delete the session",
				"description": "Delete the session with the given name. Stop and logout as well. Idempotent operation.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/sessions/{{$parameter[\"session\"]}}"
					}
				}
			},
			{
				"name": "Get Me",
				"value": "Get Me",
				"action": "Get information about the authenticated account",
				"description": "Get information about the authenticated account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/sessions/{{$parameter[\"session\"]}}/me"
					}
				}
			},
			{
				"name": "Start",
				"value": "Start",
				"action": "Start the session",
				"description": "Start the session with the given name. The session must exist. Idempotent operation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sessions/{{$parameter[\"session\"]}}/start"
					}
				}
			},
			{
				"name": "Stop",
				"value": "Stop",
				"action": "Stop the session",
				"description": "Stop the session with the given name. Idempotent operation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sessions/{{$parameter[\"session\"]}}/stop"
					}
				}
			},
			{
				"name": "Logout",
				"value": "Logout",
				"action": "Logout from the session",
				"description": "Logout the session, restart a session if it was not STOPPED",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sessions/{{$parameter[\"session\"]}}/logout"
					}
				}
			},
			{
				"name": "Restart",
				"value": "Restart",
				"action": "Restart the session",
				"description": "Restart the session with the given name.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sessions/{{$parameter[\"session\"]}}/restart"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				]
			}
		},
		"options": [
			{
				"name": "Get My Profile",
				"value": "Get My Profile",
				"action": "Get my profile",
				"description": "Get my profile",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/profile"
					}
				}
			},
			{
				"name": "Set Profile Name",
				"value": "Set Profile Name",
				"action": "Set my profile name",
				"description": "Set my profile name",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/profile/name"
					}
				}
			},
			{
				"name": "Set Profile Status",
				"value": "Set Profile Status",
				"action": "Set profile status (About)",
				"description": "Set profile status (About)",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/profile/status"
					}
				}
			},
			{
				"name": "Set Profile Picture",
				"value": "Set Profile Picture",
				"action": "Set profile picture",
				"description": "Set profile picture",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/profile/picture"
					}
				}
			},
			{
				"name": "Delete Profile Picture",
				"value": "Delete Profile Picture",
				"action": "Delete profile picture",
				"description": "Delete profile picture",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/{{$parameter[\"session\"]}}/profile/picture"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				]
			}
		},
		"options": [
			{
				"name": "Send Text",
				"value": "Send Text",
				"action": "Send a text message",
				"description": "Send a text message",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendText"
					}
				}
			},
			{
				"name": "Send Image",
				"value": "Send Image",
				"action": "Send an image",
				"description": "Either from an URL or base64 data - look at the request schemas for details.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendImage"
					}
				}
			},
			{
				"name": "Send File",
				"value": "Send File",
				"action": "Send a file",
				"description": "Either from an URL or base64 data - look at the request schemas for details.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendFile"
					}
				}
			},
			{
				"name": "Send Voice",
				"value": "Send Voice",
				"action": "Send an voice message",
				"description": "Either from an URL or base64 data - look at the request schemas for details.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendVoice"
					}
				}
			},
			{
				"name": "Send Video",
				"value": "Send Video",
				"action": "Send a video",
				"description": "Either from an URL or base64 data - look at the request schemas for details.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendVideo"
					}
				}
			},
			{
				"name": "Send Link Custom Preview",
				"value": "Send Link Custom Preview",
				"action": "Send a text message with a CUSTOM link preview.",
				"description": "You can use regular /api/sendText if you wanna send auto-generated link preview.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/send/link-custom-preview"
					}
				}
			},
			{
				"name": "Send List",
				"value": "Send List",
				"action": "Send a list message (interactive)",
				"description": "Send a List message with sections and rows",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendList"
					}
				}
			},
			{
				"name": "Forward Message",
				"value": "Forward Message",
				"action": "Forward Message",
				"description": "",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/forwardMessage"
					}
				}
			},
			{
				"name": "Send Seen",
				"value": "Send Seen",
				"action": "Send Seen",
				"description": "",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendSeen"
					}
				}
			},
			{
				"name": "Start Typing",
				"value": "Start Typing",
				"action": "Start Typing",
				"description": "",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/startTyping"
					}
				}
			},
			{
				"name": "Stop Typing",
				"value": "Stop Typing",
				"action": "Stop Typing",
				"description": "",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/stopTyping"
					}
				}
			},
			{
				"name": "Set Reaction",
				"value": "Set Reaction",
				"action": "React to a message with an emoji",
				"description": "React to a message with an emoji",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/reaction"
					}
				}
			},
			{
				"name": "Set Star",
				"value": "Set Star",
				"action": "Star or unstar a message",
				"description": "Star or unstar a message",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/star"
					}
				}
			},
			{
				"name": "Send Poll",
				"value": "Send Poll",
				"action": "Send a poll with options",
				"description": "You can use it as buttons or list replacement",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendPoll"
					}
				}
			},
			{
				"name": "Send Poll Vote",
				"value": "Send Poll Vote",
				"action": "Vote on a poll",
				"description": "Cast vote(s) on an existing poll message",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendPollVote"
					}
				}
			},
			{
				"name": "Send Location",
				"value": "Send Location",
				"action": "Send Location",
				"description": "",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendLocation"
					}
				}
			},
			{
				"name": "Send Contact Vcard",
				"value": "Send Contact Vcard",
				"action": "Send Contact Vcard",
				"description": "",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/sendContactVcard"
					}
				}
			},
			{
				"name": "Send Buttons Reply",
				"value": "Send Buttons Reply",
				"action": "Reply on a button message",
				"description": "Reply on a button message",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/send/buttons/reply"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				]
			}
		},
		"options": [
			{
				"name": "Get Chats",
				"value": "Get Chats",
				"action": "Get chats",
				"description": "Get chats",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/chats"
					}
				}
			},
			{
				"name": "Get Chats Overview",
				"value": "Get Chats Overview",
				"action": "Get chats overview. Includes all necessary things to build UI \"your chats overview\" page - chat id, name, picture, last message. Sorting by last message timestamp",
				"description": "Get chats overview. Includes all necessary things to build UI \"your chats overview\" page - chat id, name, picture, last message. Sorting by last message timestamp",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/overview"
					}
				}
			},
			{
				"name": "Post Chats Overview",
				"value": "Post Chats Overview",
				"action": "Get chats overview. Use POST if you have too many \"ids\" params - GET can limit it",
				"description": "Get chats overview. Use POST if you have too many \"ids\" params - GET can limit it",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/overview"
					}
				}
			},
			{
				"name": "Delete Chat",
				"value": "Delete Chat",
				"action": "Deletes the chat",
				"description": "Deletes the chat",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}"
					}
				}
			},
			{
				"name": "Get Chat Picture",
				"value": "Get Chat Picture",
				"action": "Gets chat picture",
				"description": "Gets chat picture",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/picture"
					}
				}
			},
			{
				"name": "Get Chat Messages",
				"value": "Get Chat Messages",
				"action": "Gets messages in the chat",
				"description": "Gets messages in the chat",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/messages"
					}
				}
			},
			{
				"name": "Clear Messages",
				"value": "Clear Messages",
				"action": "Clears all messages from the chat",
				"description": "Clears all messages from the chat",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/messages"
					}
				}
			},
			{
				"name": "Read Chat Messages",
				"value": "Read Chat Messages",
				"action": "Read unread messages in the chat",
				"description": "Read unread messages in the chat",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/messages/read"
					}
				}
			},
			{
				"name": "Get Chat Message",
				"value": "Get Chat Message",
				"action": "Gets message by id",
				"description": "Gets message by id",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/messages/{{$parameter[\"messageId\"]}}"
					}
				}
			},
			{
				"name": "Delete Message",
				"value": "Delete Message",
				"action": "Deletes a message from the chat",
				"description": "Deletes a message from the chat",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/messages/{{$parameter[\"messageId\"]}}"
					}
				}
			},
			{
				"name": "Edit Message",
				"value": "Edit Message",
				"action": "Edits a message in the chat",
				"description": "Edits a message in the chat",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/messages/{{$parameter[\"messageId\"]}}"
					}
				}
			},
			{
				"name": "Pin Message",
				"value": "Pin Message",
				"action": "Pins a message in the chat",
				"description": "Pins a message in the chat",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/messages/{{$parameter[\"messageId\"]}}/pin"
					}
				}
			},
			{
				"name": "Unpin Message",
				"value": "Unpin Message",
				"action": "Unpins a message in the chat",
				"description": "Unpins a message in the chat",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/messages/{{$parameter[\"messageId\"]}}/unpin"
					}
				}
			},
			{
				"name": "Archive Chat",
				"value": "Archive Chat",
				"action": "Archive the chat",
				"description": "Archive the chat",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/archive"
					}
				}
			},
			{
				"name": "Unarchive Chat",
				"value": "Unarchive Chat",
				"action": "Unarchive the chat",
				"description": "Unarchive the chat",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/unarchive"
					}
				}
			},
			{
				"name": "Unread Chat",
				"value": "Unread Chat",
				"action": "Unread the chat",
				"description": "Unread the chat",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/chats/{{$parameter[\"chatId\"]}}/unread"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Calls"
				]
			}
		},
		"options": [
			{
				"name": "Reject Call",
				"value": "Reject Call",
				"action": "Reject incoming call",
				"description": "Reject incoming call",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/calls/reject"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				]
			}
		},
		"options": [
			{
				"name": "List",
				"value": "List",
				"action": "Get list of know channels",
				"description": "Get list of know channels",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/channels"
					}
				}
			},
			{
				"name": "Create",
				"value": "Create",
				"action": "Create a new channel.",
				"description": "Create a new channel.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/channels"
					}
				}
			},
			{
				"name": "Delete",
				"value": "Delete",
				"action": "Delete the channel.",
				"description": "Delete the channel.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Get",
				"value": "Get",
				"action": "Get the channel info",
				"description": "You can use either id (123@newsletter) OR invite code (https://www.whatsapp.com/channel/123)",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Preview Channel Messages",
				"value": "Preview Channel Messages",
				"action": "Preview channel messages",
				"description": "You can use either invite code (https://www.whatsapp.com/channel/123) or (123)ORChannel ID (123@newsletter).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/{{$parameter[\"id\"]}}/messages/preview"
					}
				}
			},
			{
				"name": "Follow",
				"value": "Follow",
				"action": "Follow the channel.",
				"description": "Follow the channel.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/{{$parameter[\"id\"]}}/follow"
					}
				}
			},
			{
				"name": "Unfollow",
				"value": "Unfollow",
				"action": "Unfollow the channel.",
				"description": "Unfollow the channel.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/{{$parameter[\"id\"]}}/unfollow"
					}
				}
			},
			{
				"name": "Mute",
				"value": "Mute",
				"action": "Mute the channel.",
				"description": "Mute the channel.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/{{$parameter[\"id\"]}}/mute"
					}
				}
			},
			{
				"name": "Unmute",
				"value": "Unmute",
				"action": "Unmute the channel.",
				"description": "Unmute the channel.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/{{$parameter[\"id\"]}}/unmute"
					}
				}
			},
			{
				"name": "Search By View",
				"value": "Search By View",
				"action": "Search for channels (by view)",
				"description": "Search for channels (by view)",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/search/by-view"
					}
				}
			},
			{
				"name": "Search By Text",
				"value": "Search By Text",
				"action": "Search for channels (by text)",
				"description": "Search for channels (by text)",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/search/by-text"
					}
				}
			},
			{
				"name": "Get Search Views",
				"value": "Get Search Views",
				"action": "Get list of views for channel search",
				"description": "Get list of views for channel search",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/search/views"
					}
				}
			},
			{
				"name": "Get Search Countries",
				"value": "Get Search Countries",
				"action": "Get list of countries for channel search",
				"description": "Get list of countries for channel search",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/search/countries"
					}
				}
			},
			{
				"name": "Get Search Categories",
				"value": "Get Search Categories",
				"action": "Get list of categories for channel search",
				"description": "Get list of categories for channel search",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/channels/search/categories"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				]
			}
		},
		"options": [
			{
				"name": "Send Text Status",
				"value": "Send Text Status",
				"action": "Send text status",
				"description": "Send text status",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/status/text"
					}
				}
			},
			{
				"name": "Send Image Status",
				"value": "Send Image Status",
				"action": "Send image status",
				"description": "Send image status",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/status/image"
					}
				}
			},
			{
				"name": "Send Voice Status",
				"value": "Send Voice Status",
				"action": "Send voice status",
				"description": "Send voice status",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/status/voice"
					}
				}
			},
			{
				"name": "Send Video Status",
				"value": "Send Video Status",
				"action": "Send video status",
				"description": "Send video status",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/status/video"
					}
				}
			},
			{
				"name": "Delete Status",
				"value": "Delete Status",
				"action": "DELETE sent status",
				"description": "DELETE sent status",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/status/delete"
					}
				}
			},
			{
				"name": "Get New Message Id",
				"value": "Get New Message Id",
				"action": "Generate message ID you can use to batch contacts",
				"description": "Generate message ID you can use to batch contacts",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/status/new-message-id"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				]
			}
		},
		"options": [
			{
				"name": "Get All",
				"value": "Get All",
				"action": "Get all labels",
				"description": "Get all labels",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/labels"
					}
				}
			},
			{
				"name": "Create",
				"value": "Create",
				"action": "Create a new label",
				"description": "Create a new label",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/labels"
					}
				}
			},
			{
				"name": "Update",
				"value": "Update",
				"action": "Update a label",
				"description": "Update a label",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/labels/{{$parameter[\"labelId\"]}}"
					}
				}
			},
			{
				"name": "Delete",
				"value": "Delete",
				"action": "Delete a label",
				"description": "Delete a label",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/{{$parameter[\"session\"]}}/labels/{{$parameter[\"labelId\"]}}"
					}
				}
			},
			{
				"name": "Get Chat Labels",
				"value": "Get Chat Labels",
				"action": "Get labels for the chat",
				"description": "Get labels for the chat",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/labels/chats/{{$parameter[\"chatId\"]}}"
					}
				}
			},
			{
				"name": "Put Chat Labels",
				"value": "Put Chat Labels",
				"action": "Save labels for the chat",
				"description": "Save labels for the chat",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/labels/chats/{{$parameter[\"chatId\"]}}"
					}
				}
			},
			{
				"name": "Get Chats By Label",
				"value": "Get Chats By Label",
				"action": "Get chats by label",
				"description": "Get chats by label",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/labels/{{$parameter[\"labelId\"]}}/chats"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				]
			}
		},
		"options": [
			{
				"name": "Get All",
				"value": "Get All",
				"action": "Get all contacts",
				"description": "Get all contacts",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/contacts/all"
					}
				}
			},
			{
				"name": "Get",
				"value": "Get",
				"action": "Get contact basic info",
				"description": "The method always return result, even if the phone number is not registered in WhatsApp. For that - use /contacts/check-exists endpoint below.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/contacts"
					}
				}
			},
			{
				"name": "Check Exists",
				"value": "Check Exists",
				"action": "Check phone number is registered in WhatsApp.",
				"description": "Check phone number is registered in WhatsApp.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/contacts/check-exists"
					}
				}
			},
			{
				"name": "Get About",
				"value": "Get About",
				"action": "Gets the Contact's \"about\" info",
				"description": "Returns null if you do not have permission to read their status.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/contacts/about"
					}
				}
			},
			{
				"name": "Get Profile Picture",
				"value": "Get Profile Picture",
				"action": "Get contact's profile picture URL",
				"description": "If privacy settings do not allow to get the picture, the method will return null.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/contacts/profile-picture"
					}
				}
			},
			{
				"name": "Block",
				"value": "Block",
				"action": "Block contact",
				"description": "Block contact",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/contacts/block"
					}
				}
			},
			{
				"name": "Unblock",
				"value": "Unblock",
				"action": "Unblock contact",
				"description": "Unblock contact",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/contacts/unblock"
					}
				}
			},
			{
				"name": "Put",
				"value": "Put",
				"action": "Create or update contact",
				"description": "Create or update contact on the phone address book. May not work if you have installed many WhatsApp apps on the same phone",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/contacts/{{$parameter[\"chatId\"]}}"
					}
				}
			},
			{
				"name": "Get Lids Count",
				"value": "Get Lids Count",
				"action": "Get the number of known lids",
				"description": "Get the number of known lids",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/lids/count"
					}
				}
			},
			{
				"name": "Find PN By Lid",
				"value": "Find PN By Lid",
				"action": "Get phone number by lid",
				"description": "Get phone number by lid",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/lids/{{$parameter[\"lid\"]}}"
					}
				}
			},
			{
				"name": "Find LID By Phone Number",
				"value": "Find LID By Phone Number",
				"action": "Get lid by phone number (chat id)",
				"description": "Get lid by phone number (chat id)",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/lids/pn/{{$parameter[\"phoneNumber\"]}}"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				]
			}
		},
		"options": [
			{
				"name": "Create Group",
				"value": "Create Group",
				"action": "Create a new group.",
				"description": "Create a new group.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups"
					}
				}
			},
			{
				"name": "Get Groups",
				"value": "Get Groups",
				"action": "Get all groups.",
				"description": "Get all groups.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups"
					}
				}
			},
			{
				"name": "Join Info Group",
				"value": "Join Info Group",
				"action": "Get info about the group before joining.",
				"description": "Get info about the group before joining.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/join-info"
					}
				}
			},
			{
				"name": "Join Group",
				"value": "Join Group",
				"action": "Join group via code",
				"description": "Join group via code",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/join"
					}
				}
			},
			{
				"name": "Get Groups Count",
				"value": "Get Groups Count",
				"action": "Get the number of groups.",
				"description": "Get the number of groups.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/count"
					}
				}
			},
			{
				"name": "Refresh Groups",
				"value": "Refresh Groups",
				"action": "Refresh groups from the server.",
				"description": "Refresh groups from the server.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/refresh"
					}
				}
			},
			{
				"name": "Get Group",
				"value": "Get Group",
				"action": "Get the group.",
				"description": "Get the group.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete Group",
				"value": "Delete Group",
				"action": "Delete the group.",
				"description": "Delete the group.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Leave Group",
				"value": "Leave Group",
				"action": "Leave the group.",
				"description": "Leave the group.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/leave"
					}
				}
			},
			{
				"name": "Get Chat Picture",
				"value": "Get Chat Picture",
				"action": "Get group picture",
				"description": "Get group picture",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/picture"
					}
				}
			},
			{
				"name": "Set Picture",
				"value": "Set Picture",
				"action": "Set group picture",
				"description": "Set group picture",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/picture"
					}
				}
			},
			{
				"name": "Delete Picture",
				"value": "Delete Picture",
				"action": "Delete group picture",
				"description": "Delete group picture",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/picture"
					}
				}
			},
			{
				"name": "Set Description",
				"value": "Set Description",
				"action": "Updates the group description.",
				"description": "Returns \"true\" if the subject was properly updated. This can return \"false\" if the user does not have the necessary permissions.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/description"
					}
				}
			},
			{
				"name": "Set Subject",
				"value": "Set Subject",
				"action": "Updates the group subject",
				"description": "Returns \"true\" if the subject was properly updated. This can return \"false\" if the user does not have the necessary permissions.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/subject"
					}
				}
			},
			{
				"name": "Set Info Admin Only",
				"value": "Set Info Admin Only",
				"action": "Updates the group \"info admin only\" settings.",
				"description": "You can allow only admins to edit group info (title, description, photo).",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/settings/security/info-admin-only"
					}
				}
			},
			{
				"name": "Get Info Admin Only",
				"value": "Get Info Admin Only",
				"action": "Get the group's 'info admin only' settings.",
				"description": "You can allow only admins to edit group info (title, description, photo).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/settings/security/info-admin-only"
					}
				}
			},
			{
				"name": "Set Messages Admin Only",
				"value": "Set Messages Admin Only",
				"action": "Update settings - who can send messages",
				"description": "Updates the group settings to only allow admins to send messages.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/settings/security/messages-admin-only"
					}
				}
			},
			{
				"name": "Get Messages Admin Only",
				"value": "Get Messages Admin Only",
				"action": "Get settings - who can send messages",
				"description": "The group settings to only allow admins to send messages.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/settings/security/messages-admin-only"
					}
				}
			},
			{
				"name": "Get Invite Code",
				"value": "Get Invite Code",
				"action": "Gets the invite code for the group.",
				"description": "Gets the invite code for the group.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/invite-code"
					}
				}
			},
			{
				"name": "Revoke Invite Code",
				"value": "Revoke Invite Code",
				"action": "Invalidates the current group invite code and generates a new one.",
				"description": "Invalidates the current group invite code and generates a new one.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/invite-code/revoke"
					}
				}
			},
			{
				"name": "Get Participants",
				"value": "Get Participants",
				"action": "Get participants",
				"description": "Get participants",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/participants"
					}
				}
			},
			{
				"name": "Get Group Participants",
				"value": "Get Group Participants",
				"action": "Get group participants.",
				"description": "Get group participants.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/participants/v2"
					}
				}
			},
			{
				"name": "Add Participants",
				"value": "Add Participants",
				"action": "Add participants",
				"description": "Add participants",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/participants/add"
					}
				}
			},
			{
				"name": "Remove Participants",
				"value": "Remove Participants",
				"action": "Remove participants",
				"description": "Remove participants",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/participants/remove"
					}
				}
			},
			{
				"name": "Promote To Admin",
				"value": "Promote To Admin",
				"action": "Promote participants to admin users.",
				"description": "Promote participants to admin users.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/admin/promote"
					}
				}
			},
			{
				"name": "Demote To Admin",
				"value": "Demote To Admin",
				"action": "Demotes participants to regular users.",
				"description": "Demotes participants to regular users.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/groups/{{$parameter[\"id\"]}}/admin/demote"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				]
			}
		},
		"options": [
			{
				"name": "Set Presence",
				"value": "Set Presence",
				"action": "Set session presence",
				"description": "Set session presence",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/presence"
					}
				}
			},
			{
				"name": "Get Presence All",
				"value": "Get Presence All",
				"action": "Get all subscribed presence information.",
				"description": "Get all subscribed presence information.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/presence"
					}
				}
			},
			{
				"name": "Get Presence",
				"value": "Get Presence",
				"action": "Get the presence for the chat id. If it hasn't been subscribed - it also subscribes to it.",
				"description": "Get the presence for the chat id. If it hasn't been subscribed - it also subscribes to it.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/{{$parameter[\"session\"]}}/presence/{{$parameter[\"chatId\"]}}"
					}
				}
			},
			{
				"name": "Subscribe",
				"value": "Subscribe",
				"action": "Subscribe to presence events for the chat.",
				"description": "Subscribe to presence events for the chat.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/presence/{{$parameter[\"chatId\"]}}/subscribe"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Events"
				]
			}
		},
		"options": [
			{
				"name": "Send Event",
				"value": "Send Event",
				"action": "Send an event message",
				"description": "Send an event message",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/events"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				]
			}
		},
		"options": [
			{
				"name": "Ping",
				"value": "Ping",
				"action": "Ping the server",
				"description": "Check if the server is alive and responding to requests.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ping"
					}
				}
			},
			{
				"name": "Check",
				"value": "Check",
				"action": "Check the health of the server",
				"description": "Perform all health checks and return the server's health status.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/health"
					}
				}
			},
			{
				"name": "Get",
				"value": "Get",
				"action": "Get the version of the server",
				"description": "Get the version of the server",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/server/version"
					}
				}
			},
			{
				"name": "Environment",
				"value": "Environment",
				"action": "Get the server environment",
				"description": "Get the server environment",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/server/environment"
					}
				}
			},
			{
				"name": "Status",
				"value": "Status",
				"action": "Get the server status",
				"description": "Get the server status",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/server/status"
					}
				}
			},
			{
				"name": "Stop",
				"value": "Stop",
				"action": "Stop (and restart) the server",
				"description": "If you're using docker, after calling this endpoint Docker will start a new container, so you can use this endpoint to restart the server",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/server/stop"
					}
				}
			},
			{
				"name": "Cpu Profile",
				"value": "Cpu Profile",
				"action": "Collect and return a CPU profile for the current nodejs process",
				"description": "Uses the Node.js inspector profiler to capture a .cpuprofile",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/server/debug/cpu"
					}
				}
			},
			{
				"name": "Heapsnapshot",
				"value": "Heapsnapshot",
				"action": "Return a heapsnapshot for the current nodejs process",
				"description": "Return a heapsnapshot of the server's memory",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/server/debug/heapsnapshot"
					}
				}
			},
			{
				"name": "Browser Trace",
				"value": "Browser Trace",
				"action": "Collect and get a trace.json for Chrome DevTools ",
				"description": "Uses https://pptr.dev/api/puppeteer.tracing",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/server/debug/browser/trace/{{$parameter[\"session\"]}}"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				]
			}
		},
		"options": [
			{
				"name": "Convert Voice",
				"value": "Convert Voice",
				"action": "Convert voice to WhatsApp format (opus)",
				"description": "Convert voice to WhatsApp format (opus)",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/media/convert/voice"
					}
				}
			},
			{
				"name": "Convert Video",
				"value": "Convert Video",
				"action": "Convert video to WhatsApp format (mp4)",
				"description": "Convert video to WhatsApp format (mp4)",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/{{$parameter[\"session\"]}}/media/convert/video"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				]
			}
		},
		"options": [
			{
				"name": "List",
				"value": "List",
				"action": "List all apps for a session",
				"description": "List all apps for a session",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/apps"
					}
				}
			},
			{
				"name": "Create",
				"value": "Create",
				"action": "Create a new app",
				"description": "Create a new app",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/apps"
					}
				}
			},
			{
				"name": "Get",
				"value": "Get",
				"action": "Get app by ID",
				"description": "Get app by ID",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/apps/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Update",
				"value": "Update",
				"action": "Update an existing app",
				"description": "Update an existing app",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/apps/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete",
				"value": "Delete",
				"action": "Delete an app",
				"description": "Delete an app",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/apps/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Get Languages",
				"value": "Get Languages",
				"action": "Get available languages for Chatwoot app",
				"description": "Get available languages for Chatwoot app",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/apps/chatwoot/locales"
					}
				}
			}
		],
		"default": ""
	},
	{
		"displayName": "GET /api/{session}/auth/qr",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Get QR"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Get QR"
				]
			}
		}
	},
	{
		"displayName": "Format",
		"name": "format",
		"required": true,
		"default": "image",
		"type": "options",
		"options": [
			{
				"name": "Image",
				"value": "image"
			},
			{
				"name": "Raw",
				"value": "raw"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "format",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Get QR"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/auth/request-code",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Request Code"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Request Code"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Phone Number",
		"name": "phoneNumber",
		"type": "string",
		"default": "12132132130",
		"description": "Mobile phone number in international format",
		"routing": {
			"send": {
				"property": "phoneNumber",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Request Code"
				]
			}
		}
	},
	{
		"displayName": "Method",
		"name": "method",
		"type": "string",
		"default": null,
		"description": "How would you like to receive the one time code for registration? |sms|voice. Leave empty for Web pairing.",
		"routing": {
			"send": {
				"property": "method",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Request Code"
				]
			}
		}
	},
	{
		"displayName": "POST /api/keys",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Is Admin",
		"name": "isAdmin",
		"type": "boolean",
		"default": false,
		"routing": {
			"send": {
				"property": "isAdmin",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Is Active",
		"name": "isActive",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "isActive",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "GET /api/keys",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/keys/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Is Admin",
		"name": "isAdmin",
		"type": "boolean",
		"default": false,
		"routing": {
			"send": {
				"property": "isAdmin",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Is Active",
		"name": "isActive",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "isActive",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/keys/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Api Keys"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "GET /api/sessions",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "Expand",
		"name": "expand",
		"description": "Expand additional session details.",
		"default": "[\n  null\n]",
		"type": "json",
		"routing": {
			"send": {
				"type": "query",
				"property": "expand",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "All",
		"name": "all",
		"description": "Return all sessions, including those that are in the STOPPED state.",
		"default": false,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "all",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sessions",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "default",
		"description": "Session name (id)",
		"routing": {
			"send": {
				"property": "name",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Apps",
		"name": "apps",
		"type": "json",
		"default": "[\n  {\n    \"enabled\": true\n  }\n]",
		"description": "Apps to be synchronized for this session.",
		"routing": {
			"send": {
				"property": "apps",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Start",
		"name": "start",
		"type": "boolean",
		"default": true,
		"description": "Start session after creation",
		"routing": {
			"send": {
				"property": "start",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Config",
		"name": "config",
		"type": "json",
		"default": "{\n  \"metadata\": {\n    \"user.id\": \"123\",\n    \"user.email\": \"email@example.com\"\n  },\n  \"proxy\": {\n    \"server\": \"localhost:3128\",\n    \"username\": null,\n    \"password\": null\n  },\n  \"debug\": false,\n  \"ignore\": {},\n  \"client\": {},\n  \"noweb\": {\n    \"markOnline\": true,\n    \"store\": {\n      \"enabled\": true,\n      \"fullSync\": false\n    }\n  },\n  \"gows\": {\n    \"storage\": {\n      \"messages\": true,\n      \"groups\": true,\n      \"chats\": true,\n      \"labels\": true\n    }\n  },\n  \"webjs\": {\n    \"tagsEventsOn\": false\n  },\n  \"webhooks\": [\n    {\n      \"url\": \"https://webhook.site/11111111-1111-1111-1111-11111111\",\n      \"events\": [\n        \"message\",\n        \"session.status\"\n      ],\n      \"hmac\": {\n        \"key\": \"your-secret-key\"\n      },\n      \"retries\": {\n        \"delaySeconds\": 2,\n        \"attempts\": 15,\n        \"policy\": \"linear\"\n      },\n      \"customHeaders\": null\n    }\n  ]\n}",
		"routing": {
			"send": {
				"property": "config",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "GET /api/sessions/{session}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "Expand",
		"name": "expand",
		"description": "Expand additional session details.",
		"default": "[\n  null\n]",
		"type": "json",
		"routing": {
			"send": {
				"type": "query",
				"property": "expand",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/sessions/{session}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Apps",
		"name": "apps",
		"type": "json",
		"default": "[\n  {\n    \"enabled\": true\n  }\n]",
		"description": "Apps to be synchronized for this session.",
		"routing": {
			"send": {
				"property": "apps",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Config",
		"name": "config",
		"type": "json",
		"default": "{\n  \"metadata\": {\n    \"user.id\": \"123\",\n    \"user.email\": \"email@example.com\"\n  },\n  \"proxy\": {\n    \"server\": \"localhost:3128\",\n    \"username\": null,\n    \"password\": null\n  },\n  \"debug\": false,\n  \"ignore\": {},\n  \"client\": {},\n  \"noweb\": {\n    \"markOnline\": true,\n    \"store\": {\n      \"enabled\": true,\n      \"fullSync\": false\n    }\n  },\n  \"gows\": {\n    \"storage\": {\n      \"messages\": true,\n      \"groups\": true,\n      \"chats\": true,\n      \"labels\": true\n    }\n  },\n  \"webjs\": {\n    \"tagsEventsOn\": false\n  },\n  \"webhooks\": [\n    {\n      \"url\": \"https://webhook.site/11111111-1111-1111-1111-11111111\",\n      \"events\": [\n        \"message\",\n        \"session.status\"\n      ],\n      \"hmac\": {\n        \"key\": \"your-secret-key\"\n      },\n      \"retries\": {\n        \"delaySeconds\": 2,\n        \"attempts\": 15,\n        \"policy\": \"linear\"\n      },\n      \"customHeaders\": null\n    }\n  ]\n}",
		"routing": {
			"send": {
				"property": "config",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/sessions/{session}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "GET /api/sessions/{session}/me",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Get Me"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Get Me"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sessions/{session}/start",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Start"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Start"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sessions/{session}/stop",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Stop"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Stop"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sessions/{session}/logout",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Logout"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Logout"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sessions/{session}/restart",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Restart"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Sessions"
				],
				"operation": [
					"Restart"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/profile",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Get My Profile"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Get My Profile"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/profile/name",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Name"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Name"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "My New Name",
		"routing": {
			"send": {
				"property": "name",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Name"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/profile/status",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Status"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Status",
		"name": "status",
		"type": "string",
		"default": "🎉 Hey there! I am using WhatsApp 🎉",
		"routing": {
			"send": {
				"property": "status",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Status"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/profile/picture",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Picture"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Picture"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"image/jpeg\",\n  \"filename\": \"filename.jpg\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/waha.jpg\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Set Profile Picture"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/{session}/profile/picture",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Delete Profile Picture"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Delete Profile Picture"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendText",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Text"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Text"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Text"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Text"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Text",
		"name": "text",
		"type": "string",
		"default": "Hi there!",
		"routing": {
			"send": {
				"property": "text",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Text"
				]
			}
		}
	},
	{
		"displayName": "Link Preview",
		"name": "linkPreview",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "linkPreview",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Text"
				]
			}
		}
	},
	{
		"displayName": "Link Preview High Quality",
		"name": "linkPreviewHighQuality",
		"type": "boolean",
		"default": false,
		"routing": {
			"send": {
				"property": "linkPreviewHighQuality",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Text"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendImage",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Image"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Image"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Image"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"image/jpeg\",\n  \"filename\": \"filename.jpg\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/waha.jpg\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Image"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Image"
				]
			}
		}
	},
	{
		"displayName": "Caption",
		"name": "caption",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "caption",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Image"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendFile",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send File"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send File"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send File"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"image/jpeg\",\n  \"filename\": \"filename.jpg\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/waha.jpg\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send File"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send File"
				]
			}
		}
	},
	{
		"displayName": "Caption",
		"name": "caption",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "caption",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send File"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendVoice",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Voice"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Voice"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Voice"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"audio/ogg; codecs=opus\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/dev.likeapro.opus\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Voice"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Voice"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Convert",
		"name": "convert",
		"type": "boolean",
		"default": true,
		"description": "Convert the input file to the required format using ffmpeg before sending",
		"routing": {
			"send": {
				"property": "convert",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Voice"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendVideo",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Video"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Video"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Video"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"video/mp4\",\n  \"filename\": \"video.mp4\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/video.mp4\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Video"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Video"
				]
			}
		}
	},
	{
		"displayName": "As Note",
		"name": "asNote",
		"type": "boolean",
		"default": false,
		"description": "Send as video note (aka instant or round video).",
		"routing": {
			"send": {
				"property": "asNote",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Video"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Convert",
		"name": "convert",
		"type": "boolean",
		"default": true,
		"description": "Convert the input file to the required format using ffmpeg before sending",
		"routing": {
			"send": {
				"property": "convert",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Video"
				]
			}
		}
	},
	{
		"displayName": "Caption",
		"name": "caption",
		"type": "string",
		"default": "Just watch at this!",
		"routing": {
			"send": {
				"property": "caption",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Video"
				]
			}
		}
	},
	{
		"displayName": "POST /api/send/link-custom-preview",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Link Custom Preview"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Link Custom Preview"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Link Custom Preview"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Text",
		"name": "text",
		"type": "string",
		"default": "Check this out! https://github.com/",
		"description": "The text to send. MUST include the URL provided in preview.url",
		"routing": {
			"send": {
				"property": "text",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Link Custom Preview"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Link Custom Preview"
				]
			}
		}
	},
	{
		"displayName": "Link Preview High Quality",
		"name": "linkPreviewHighQuality",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "linkPreviewHighQuality",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Link Custom Preview"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Preview",
		"name": "preview",
		"type": "json",
		"default": "{\n  \"image\": {\n    \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/waha.jpg\"\n  },\n  \"url\": \"https://github.com/\",\n  \"title\": \"Your Title\",\n  \"description\": \"Check this out, amazing!\"\n}",
		"routing": {
			"send": {
				"property": "preview",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Link Custom Preview"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendList",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send List"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send List"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send List"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Message",
		"name": "message",
		"type": "json",
		"default": "{\n  \"title\": \"Example List\",\n  \"description\": \"Choose one of the options\",\n  \"footer\": \"Footer note\",\n  \"button\": \"Select\",\n  \"sections\": [\n    {\n      \"title\": \"Section 1\",\n      \"rows\": [\n        {\n          \"title\": \"Option 1\",\n          \"rowId\": \"option1\",\n          \"description\": \"Description 1\"\n        },\n        {\n          \"title\": \"Option 2\",\n          \"rowId\": \"option2\",\n          \"description\": \"Description 2\"\n        }\n      ]\n    }\n  ]\n}",
		"routing": {
			"send": {
				"property": "message",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send List"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send List"
				]
			}
		}
	},
	{
		"displayName": "POST /api/forwardMessage",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Forward Message"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Forward Message"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Forward Message"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Message Id",
		"name": "messageId",
		"type": "string",
		"default": "={{ $json.payload.id }}",
		"routing": {
			"send": {
				"property": "messageId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Forward Message"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendSeen",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Seen"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Seen"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Seen"
				]
			}
		}
	},
	{
		"displayName": "Message Id",
		"name": "messageId",
		"type": "string",
		"default": "={{ $json.payload.id }}",
		"routing": {
			"send": {
				"property": "messageId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Seen"
				]
			}
		}
	},
	{
		"displayName": "Message Ids",
		"name": "messageIds",
		"type": "json",
		"default": "[\n  \"false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA\"\n]",
		"routing": {
			"send": {
				"property": "messageIds",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Seen"
				]
			}
		}
	},
	{
		"displayName": "Participant",
		"name": "participant",
		"type": "string",
		"default": "11111111111@c.us",
		"description": "NOWEB engine only - the ID of the user that sent the message (undefined for individual chats)",
		"routing": {
			"send": {
				"property": "participant",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Seen"
				]
			}
		}
	},
	{
		"displayName": "POST /api/startTyping",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Start Typing"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Start Typing"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Start Typing"
				]
			}
		}
	},
	{
		"displayName": "POST /api/stopTyping",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Stop Typing"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Stop Typing"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Stop Typing"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/reaction",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Reaction"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Reaction"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Message Id",
		"name": "messageId",
		"type": "string",
		"default": "={{ $json.payload.id }}",
		"routing": {
			"send": {
				"property": "messageId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Reaction"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Reaction",
		"name": "reaction",
		"type": "string",
		"default": "👍",
		"description": "Emoji to react with. Send an empty string to remove the reaction",
		"routing": {
			"send": {
				"property": "reaction",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Reaction"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/star",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Star"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Star"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Message Id",
		"name": "messageId",
		"type": "string",
		"default": "={{ $json.payload.id }}",
		"routing": {
			"send": {
				"property": "messageId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Star"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Star"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Star",
		"name": "star",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "star",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Set Star"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendPoll",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Poll",
		"name": "poll",
		"type": "json",
		"default": "{\n  \"name\": \"How are you?\",\n  \"options\": [\n    \"Awesome!\",\n    \"Good!\",\n    \"Not bad!\"\n  ],\n  \"multipleAnswers\": false\n}",
		"routing": {
			"send": {
				"property": "poll",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendPollVote",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll Vote"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll Vote"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll Vote"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Poll Message Id",
		"name": "pollMessageId",
		"type": "string",
		"default": "false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"description": "The ID of the poll message. Format: {fromMe}_{chatID}_{messageId}[_{participant}] or just ID for GOWS",
		"routing": {
			"send": {
				"property": "pollMessageId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll Vote"
				]
			}
		}
	},
	{
		"displayName": "Poll Server Id",
		"name": "pollServerId",
		"type": "number",
		"default": null,
		"description": "Only for Channels - server message id (if known); if omitted, API may look it up in the storage",
		"routing": {
			"send": {
				"property": "pollServerId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll Vote"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Votes",
		"name": "votes",
		"type": "json",
		"default": "[\n  \"Awesome!\"\n]",
		"routing": {
			"send": {
				"property": "votes",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Poll Vote"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendLocation",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Location"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Location"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Location"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Latitude",
		"name": "latitude",
		"type": "number",
		"default": 38.8937255,
		"routing": {
			"send": {
				"property": "latitude",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Location"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Longitude",
		"name": "longitude",
		"type": "number",
		"default": -77.0969763,
		"routing": {
			"send": {
				"property": "longitude",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Location"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Title",
		"name": "title",
		"type": "string",
		"default": "Our office",
		"routing": {
			"send": {
				"property": "title",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Location"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Location"
				]
			}
		}
	},
	{
		"displayName": "POST /api/sendContactVcard",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Contact Vcard"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Contact Vcard"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Contact Vcard"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Contacts",
		"name": "contacts",
		"type": "json",
		"default": "[\n  {\n    \"vcard\": \"BEGIN:VCARD\\nVERSION:3.0\\nFN:Jane Doe\\nORG:Company Name;\\nTEL;type=CELL;type=VOICE;waid=911111111111:+91 11111 11111\\nEND:VCARD\"\n  }\n]",
		"routing": {
			"send": {
				"property": "contacts",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Contact Vcard"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Contact Vcard"
				]
			}
		}
	},
	{
		"displayName": "POST /api/send/buttons/reply",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Buttons Reply"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Buttons Reply"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Buttons Reply"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "replyTo",
		"type": "string",
		"default": null,
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "replyTo",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Buttons Reply"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Selected Display Text",
		"name": "selectedDisplayText",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "selectedDisplayText",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Buttons Reply"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Selected Button ID",
		"name": "selectedButtonID",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "selectedButtonID",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chatting"
				],
				"operation": [
					"Send Buttons Reply"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/chats",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats"
				]
			}
		}
	},
	{
		"displayName": "Sort By",
		"name": "sortBy",
		"description": "Sort by field",
		"default": "conversationTimestamp",
		"type": "options",
		"options": [
			{
				"name": "Conversation Timestamp",
				"value": "conversationTimestamp"
			},
			{
				"name": "Id",
				"value": "id"
			},
			{
				"name": "Name",
				"value": "name"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sortBy",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats"
				]
			}
		}
	},
	{
		"displayName": "Sort Order",
		"name": "sortOrder",
		"description": "Sort order - <b>desc</b>ending (Z => A, New first) or <b>asc</b>ending (A => Z, Old first)",
		"default": "desc",
		"type": "options",
		"options": [
			{
				"name": "Desc",
				"value": "desc"
			},
			{
				"name": "Asc",
				"value": "asc"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sortOrder",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats"
				]
			}
		}
	},
	{
		"displayName": "Limit",
		"name": "limit",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "limit",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats"
				]
			}
		}
	},
	{
		"displayName": "Offset",
		"name": "offset",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "offset",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/chats/overview",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats Overview"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats Overview"
				]
			}
		}
	},
	{
		"displayName": "Limit",
		"name": "limit",
		"default": 20,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "limit",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats Overview"
				]
			}
		}
	},
	{
		"displayName": "Offset",
		"name": "offset",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "offset",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats Overview"
				]
			}
		}
	},
	{
		"displayName": "Ids",
		"name": "ids",
		"description": "Filter by chat ids",
		"default": "[\n  \"111111111@c.us\"\n]",
		"type": "json",
		"routing": {
			"send": {
				"type": "query",
				"property": "ids",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chats Overview"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/chats/overview",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Post Chats Overview"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Post Chats Overview"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Pagination",
		"name": "pagination",
		"type": "json",
		"default": "{\n  \"limit\": 20\n}",
		"routing": {
			"send": {
				"property": "pagination",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Post Chats Overview"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Filter",
		"name": "filter",
		"type": "json",
		"default": "{\n  \"ids\": [\n    \"111111111@c.us\"\n  ]\n}",
		"routing": {
			"send": {
				"property": "filter",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Post Chats Overview"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/{session}/chats/{chatId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Delete Chat"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Delete Chat"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Delete Chat"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/chats/{chatId}/picture",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Picture"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Picture"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Picture"
				]
			}
		}
	},
	{
		"displayName": "Refresh",
		"name": "refresh",
		"description": "Refresh the picture from the server (24h cache by default). Do not refresh if not needed, you can get rate limit error",
		"default": false,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "refresh",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Picture"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/chats/{chatId}/messages",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Sort By",
		"name": "sortBy",
		"description": "Sort by field",
		"default": "timestamp",
		"type": "options",
		"options": [
			{
				"name": "Timestamp",
				"value": "timestamp"
			},
			{
				"name": "Message Timestamp",
				"value": "messageTimestamp"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sortBy",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Sort Order",
		"name": "sortOrder",
		"description": "Sort order - <b>desc</b>ending (Z => A, New first) or <b>asc</b>ending (A => Z, Old first)",
		"default": "desc",
		"type": "options",
		"options": [
			{
				"name": "Desc",
				"value": "desc"
			},
			{
				"name": "Asc",
				"value": "asc"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sortOrder",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Download Media",
		"name": "downloadMedia",
		"description": "Download media for messages",
		"default": false,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "downloadMedia",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Limit",
		"name": "limit",
		"required": true,
		"default": 10,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "limit",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Offset",
		"name": "offset",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "offset",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Filter Timestamp Lte",
		"name": "filter-timestamp-lte",
		"description": "Filter messages before this timestamp (inclusive)",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "filter.timestamp.lte",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Filter Timestamp Gte",
		"name": "filter-timestamp-gte",
		"description": "Filter messages after this timestamp (inclusive)",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "filter.timestamp.gte",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Filter From Me",
		"name": "filter-fromMe",
		"description": "From me filter (by default shows all messages)",
		"default": true,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "filter.fromMe",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Filter Ack",
		"name": "filter-ack",
		"description": "Filter messages by acknowledgment status",
		"default": "ERROR",
		"type": "options",
		"options": [
			{
				"name": "ERROR",
				"value": "ERROR"
			},
			{
				"name": "PENDING",
				"value": "PENDING"
			},
			{
				"name": "SERVER",
				"value": "SERVER"
			},
			{
				"name": "DEVICE",
				"value": "DEVICE"
			},
			{
				"name": "READ",
				"value": "READ"
			},
			{
				"name": "PLAYED",
				"value": "PLAYED"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "filter.ack",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/{session}/chats/{chatId}/messages",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Clear Messages"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Clear Messages"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Clear Messages"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/chats/{chatId}/messages/read",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Read Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Read Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Messages",
		"name": "messages",
		"description": "How much messages to read (latest first)",
		"default": 30,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "messages",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Read Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Days",
		"name": "days",
		"description": "How much days to read (latest first)",
		"default": 7,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "days",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Read Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Read Chat Messages"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/chats/{chatId}/messages/{messageId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Message"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Message"
				]
			}
		}
	},
	{
		"displayName": "Download Media",
		"name": "downloadMedia",
		"description": "Download media for messages",
		"default": true,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "downloadMedia",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Message"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Message"
				]
			}
		}
	},
	{
		"displayName": "Message Id",
		"name": "messageId",
		"required": true,
		"default": "={{ $json.payload.id }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Get Chat Message"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/{session}/chats/{chatId}/messages/{messageId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Delete Message"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Delete Message"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Delete Message"
				]
			}
		}
	},
	{
		"displayName": "Message Id",
		"name": "messageId",
		"required": true,
		"description": "Message ID in format <code>{fromMe}_{chat}_{message_id}[_{participant}]</code>",
		"default": "={{ $json.payload.id }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Delete Message"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/chats/{chatId}/messages/{messageId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Edit Message"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Edit Message"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Edit Message"
				]
			}
		}
	},
	{
		"displayName": "Message Id",
		"name": "messageId",
		"required": true,
		"description": "Message ID in format <code>{fromMe}_{chat}_{message_id}[_{participant}]</code>",
		"default": "={{ $json.payload.id }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Edit Message"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Text",
		"name": "text",
		"type": "string",
		"default": "Hello, world!",
		"routing": {
			"send": {
				"property": "text",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Edit Message"
				]
			}
		}
	},
	{
		"displayName": "Link Preview",
		"name": "linkPreview",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "linkPreview",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Edit Message"
				]
			}
		}
	},
	{
		"displayName": "Link Preview High Quality",
		"name": "linkPreviewHighQuality",
		"type": "boolean",
		"default": false,
		"routing": {
			"send": {
				"property": "linkPreviewHighQuality",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Edit Message"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/chats/{chatId}/messages/{messageId}/pin",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Pin Message"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Pin Message"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Pin Message"
				]
			}
		}
	},
	{
		"displayName": "Message Id",
		"name": "messageId",
		"required": true,
		"default": "={{ $json.payload.id }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Pin Message"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Duration",
		"name": "duration",
		"type": "number",
		"default": 86400,
		"description": "Duration in seconds. 24 hours (86400), 7 days (604800), 30 days (2592000)",
		"routing": {
			"send": {
				"property": "duration",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Pin Message"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/chats/{chatId}/messages/{messageId}/unpin",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unpin Message"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unpin Message"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unpin Message"
				]
			}
		}
	},
	{
		"displayName": "Message Id",
		"name": "messageId",
		"required": true,
		"default": "={{ $json.payload.id }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unpin Message"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/chats/{chatId}/archive",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Archive Chat"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Archive Chat"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Archive Chat"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/chats/{chatId}/unarchive",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unarchive Chat"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unarchive Chat"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unarchive Chat"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/chats/{chatId}/unread",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unread Chat"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unread Chat"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Chats"
				],
				"operation": [
					"Unread Chat"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/calls/reject",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Calls"
				],
				"operation": [
					"Reject Call"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Calls"
				],
				"operation": [
					"Reject Call"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "From",
		"name": "from",
		"type": "string",
		"default": "11111111111@c.us",
		"routing": {
			"send": {
				"property": "from",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Calls"
				],
				"operation": [
					"Reject Call"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "ABCDEFGABCDEFGABCDEFGABCDEFG",
		"description": "Call ID",
		"routing": {
			"send": {
				"property": "id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Calls"
				],
				"operation": [
					"Reject Call"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/channels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "Role",
		"name": "role",
		"default": "OWNER",
		"type": "options",
		"options": [
			{
				"name": "OWNER",
				"value": "OWNER"
			},
			{
				"name": "ADMIN",
				"value": "ADMIN"
			},
			{
				"name": "SUBSCRIBER",
				"value": "SUBSCRIBER"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "role",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/channels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "Channel Name",
		"routing": {
			"send": {
				"property": "name",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Description",
		"name": "description",
		"type": "string",
		"default": "Channel Description",
		"routing": {
			"send": {
				"property": "description",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Picture",
		"name": "picture",
		"type": "json",
		"default": "{\n  \"mimetype\": \"image/jpeg\",\n  \"filename\": \"filename.jpg\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/waha.jpg\"\n}",
		"routing": {
			"send": {
				"property": "picture",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/{session}/channels/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "WhatsApp Channel ID",
		"default": "123123123@newsletter",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/channels/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "WhatsApp Channel ID or invite code from invite link https://www.whatsapp.com/channel/11111",
		"default": "123123123@newsletter",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/channels/{id}/messages/preview",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Preview Channel Messages"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Preview Channel Messages"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Channel id or invite code",
		"default": "0029Va4K0PZ5a245NkngBA2M",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Preview Channel Messages"
				]
			}
		}
	},
	{
		"displayName": "Download Media",
		"name": "downloadMedia",
		"required": true,
		"default": false,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "downloadMedia",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Preview Channel Messages"
				]
			}
		}
	},
	{
		"displayName": "Limit",
		"name": "limit",
		"required": true,
		"default": 10,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "limit",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Preview Channel Messages"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/channels/{id}/follow",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Follow"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Follow"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "WhatsApp Channel ID",
		"default": "123123123@newsletter",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Follow"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/channels/{id}/unfollow",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Unfollow"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Unfollow"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "WhatsApp Channel ID",
		"default": "123123123@newsletter",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Unfollow"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/channels/{id}/mute",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Mute"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Mute"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "WhatsApp Channel ID",
		"default": "123123123@newsletter",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Mute"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/channels/{id}/unmute",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Unmute"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Unmute"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "WhatsApp Channel ID",
		"default": "123123123@newsletter",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Unmute"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/channels/search/by-view",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By View"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By View"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "View",
		"name": "view",
		"type": "string",
		"default": "RECOMMENDED",
		"routing": {
			"send": {
				"property": "view",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By View"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Countries",
		"name": "countries",
		"type": "json",
		"default": "[\n  \"US\"\n]",
		"routing": {
			"send": {
				"property": "countries",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By View"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Categories",
		"name": "categories",
		"type": "json",
		"default": "[]",
		"routing": {
			"send": {
				"property": "categories",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By View"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Limit",
		"name": "limit",
		"type": "number",
		"default": 50,
		"routing": {
			"send": {
				"property": "limit",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By View"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Start Cursor",
		"name": "startCursor",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "startCursor",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By View"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/channels/search/by-text",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By Text"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By Text"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Text",
		"name": "text",
		"type": "string",
		"default": "Donald Trump",
		"routing": {
			"send": {
				"property": "text",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By Text"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Categories",
		"name": "categories",
		"type": "json",
		"default": "[]",
		"routing": {
			"send": {
				"property": "categories",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By Text"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Limit",
		"name": "limit",
		"type": "number",
		"default": 50,
		"routing": {
			"send": {
				"property": "limit",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By Text"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Start Cursor",
		"name": "startCursor",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "startCursor",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Search By Text"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/channels/search/views",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get Search Views"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get Search Views"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/channels/search/countries",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get Search Countries"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get Search Countries"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/channels/search/categories",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get Search Categories"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Channels"
				],
				"operation": [
					"Get Search Categories"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/status/text",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "BBBBBBBBBBBBBBBBB",
		"description": "Pre-generated status message id",
		"routing": {
			"send": {
				"property": "id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"displayName": "Contacts",
		"name": "contacts",
		"type": "json",
		"default": "null",
		"description": "Contact list to send the status to.",
		"routing": {
			"send": {
				"property": "contacts",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Text",
		"name": "text",
		"type": "string",
		"default": "Have a look! https://github.com/",
		"routing": {
			"send": {
				"property": "text",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Background Color",
		"name": "backgroundColor",
		"type": "string",
		"default": "#38b42f",
		"routing": {
			"send": {
				"property": "backgroundColor",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Font",
		"name": "font",
		"type": "number",
		"default": 0,
		"routing": {
			"send": {
				"property": "font",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"displayName": "Link Preview",
		"name": "linkPreview",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "linkPreview",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"displayName": "Link Preview High Quality",
		"name": "linkPreviewHighQuality",
		"type": "boolean",
		"default": false,
		"routing": {
			"send": {
				"property": "linkPreviewHighQuality",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Text Status"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/status/image",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Image Status"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Image Status"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "BBBBBBBBBBBBBBBBB",
		"description": "Pre-generated status message id",
		"routing": {
			"send": {
				"property": "id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Image Status"
				]
			}
		}
	},
	{
		"displayName": "Contacts",
		"name": "contacts",
		"type": "json",
		"default": "null",
		"description": "Contact list to send the status to.",
		"routing": {
			"send": {
				"property": "contacts",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Image Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"image/jpeg\",\n  \"filename\": \"filename.jpg\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/waha.jpg\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Image Status"
				]
			}
		}
	},
	{
		"displayName": "Caption",
		"name": "caption",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "caption",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Image Status"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/status/voice",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Voice Status"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Voice Status"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "BBBBBBBBBBBBBBBBB",
		"description": "Pre-generated status message id",
		"routing": {
			"send": {
				"property": "id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Voice Status"
				]
			}
		}
	},
	{
		"displayName": "Contacts",
		"name": "contacts",
		"type": "json",
		"default": "null",
		"description": "Contact list to send the status to.",
		"routing": {
			"send": {
				"property": "contacts",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Voice Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"audio/ogg; codecs=opus\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/dev.likeapro.opus\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Voice Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Convert",
		"name": "convert",
		"type": "boolean",
		"default": true,
		"description": "Convert the input file to the required format using ffmpeg before sending",
		"routing": {
			"send": {
				"property": "convert",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Voice Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Background Color",
		"name": "backgroundColor",
		"type": "string",
		"default": "#38b42f",
		"routing": {
			"send": {
				"property": "backgroundColor",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Voice Status"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/status/video",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Video Status"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Video Status"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "BBBBBBBBBBBBBBBBB",
		"description": "Pre-generated status message id",
		"routing": {
			"send": {
				"property": "id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Video Status"
				]
			}
		}
	},
	{
		"displayName": "Contacts",
		"name": "contacts",
		"type": "json",
		"default": "null",
		"description": "Contact list to send the status to.",
		"routing": {
			"send": {
				"property": "contacts",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Video Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"video/mp4\",\n  \"filename\": \"video.mp4\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/video.mp4\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Video Status"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Convert",
		"name": "convert",
		"type": "boolean",
		"default": true,
		"description": "Convert the input file to the required format using ffmpeg before sending",
		"routing": {
			"send": {
				"property": "convert",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Video Status"
				]
			}
		}
	},
	{
		"displayName": "Caption",
		"name": "caption",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "caption",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Send Video Status"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/status/delete",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Delete Status"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Delete Status"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "AAAAAAAAAAAAAAAAA",
		"description": "Status message id to delete",
		"routing": {
			"send": {
				"property": "id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Delete Status"
				]
			}
		}
	},
	{
		"displayName": "Contacts",
		"name": "contacts",
		"type": "json",
		"default": "null",
		"description": "Contact list to send the status to.",
		"routing": {
			"send": {
				"property": "contacts",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Delete Status"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/status/new-message-id",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Get New Message Id"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Status"
				],
				"operation": [
					"Get New Message Id"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/labels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get All"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get All"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/labels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "Lead",
		"description": "Label name",
		"routing": {
			"send": {
				"property": "name",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Color Hex",
		"name": "colorHex",
		"type": "string",
		"default": "#ff9485",
		"description": "Color in hex",
		"routing": {
			"send": {
				"property": "colorHex",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Color",
		"name": "color",
		"type": "number",
		"default": null,
		"description": "Color number, not hex",
		"routing": {
			"send": {
				"property": "color",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/labels/{labelId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Label Id",
		"name": "labelId",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "Lead",
		"description": "Label name",
		"routing": {
			"send": {
				"property": "name",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Color Hex",
		"name": "colorHex",
		"type": "string",
		"default": "#ff9485",
		"description": "Color in hex",
		"routing": {
			"send": {
				"property": "colorHex",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Color",
		"name": "color",
		"type": "number",
		"default": null,
		"description": "Color number, not hex",
		"routing": {
			"send": {
				"property": "color",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/{session}/labels/{labelId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "Label Id",
		"name": "labelId",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/labels/chats/{chatId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get Chat Labels"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get Chat Labels"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get Chat Labels"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/labels/chats/{chatId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Put Chat Labels"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Put Chat Labels"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Put Chat Labels"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Labels",
		"name": "labels",
		"type": "json",
		"default": "[\n  {\n    \"id\": \"1\"\n  }\n]",
		"routing": {
			"send": {
				"property": "labels",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Put Chat Labels"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/labels/{labelId}/chats",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get Chats By Label"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get Chats By Label"
				]
			}
		}
	},
	{
		"displayName": "Label Id",
		"name": "labelId",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get Chats By Label"
				]
			}
		}
	},
	{
		"displayName": "GET /api/contacts/all",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get All"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"default": "={{ $json.session }}",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "session",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get All"
				]
			}
		}
	},
	{
		"displayName": "Sort By",
		"name": "sortBy",
		"description": "Sort by field",
		"default": "id",
		"type": "options",
		"options": [
			{
				"name": "Id",
				"value": "id"
			},
			{
				"name": "Name",
				"value": "name"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sortBy",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get All"
				]
			}
		}
	},
	{
		"displayName": "Sort Order",
		"name": "sortOrder",
		"description": "Sort order - <b>desc</b>ending (Z => A, New first) or <b>asc</b>ending (A => Z, Old first)",
		"default": "desc",
		"type": "options",
		"options": [
			{
				"name": "Desc",
				"value": "desc"
			},
			{
				"name": "Asc",
				"value": "asc"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sortOrder",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get All"
				]
			}
		}
	},
	{
		"displayName": "Limit",
		"name": "limit",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "limit",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get All"
				]
			}
		}
	},
	{
		"displayName": "Offset",
		"name": "offset",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "offset",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get All"
				]
			}
		}
	},
	{
		"displayName": "GET /api/contacts",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"default": "={{ $json.session }}",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "session",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "Contact Id",
		"name": "contactId",
		"required": true,
		"default": "11111111111@c.us",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "contactId",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "GET /api/contacts/check-exists",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Check Exists"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"default": "={{ $json.session }}",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "session",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Check Exists"
				]
			}
		}
	},
	{
		"displayName": "Phone",
		"name": "phone",
		"required": true,
		"description": "The phone number to check",
		"default": "1213213213",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "phone",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Check Exists"
				]
			}
		}
	},
	{
		"displayName": "GET /api/contacts/about",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get About"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"default": "={{ $json.session }}",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "session",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get About"
				]
			}
		}
	},
	{
		"displayName": "Contact Id",
		"name": "contactId",
		"required": true,
		"default": "11111111111@c.us",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "contactId",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get About"
				]
			}
		}
	},
	{
		"displayName": "GET /api/contacts/profile-picture",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get Profile Picture"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"default": "={{ $json.session }}",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "session",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get Profile Picture"
				]
			}
		}
	},
	{
		"displayName": "Contact Id",
		"name": "contactId",
		"required": true,
		"default": "11111111111@c.us",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "contactId",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get Profile Picture"
				]
			}
		}
	},
	{
		"displayName": "Refresh",
		"name": "refresh",
		"description": "Refresh the picture from the server (24h cache by default). Do not refresh if not needed, you can get rate limit error",
		"default": false,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "refresh",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get Profile Picture"
				]
			}
		}
	},
	{
		"displayName": "POST /api/contacts/block",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Block"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Block"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Contact Id",
		"name": "contactId",
		"type": "string",
		"default": "11111111111@c.us",
		"routing": {
			"send": {
				"property": "contactId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Block"
				]
			}
		}
	},
	{
		"displayName": "POST /api/contacts/unblock",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Unblock"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Unblock"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Contact Id",
		"name": "contactId",
		"type": "string",
		"default": "11111111111@c.us",
		"routing": {
			"send": {
				"property": "contactId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Unblock"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/contacts/{chatId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Put"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Put"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Put"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "First Name",
		"name": "firstName",
		"type": "string",
		"default": "John",
		"description": "Contact First Name",
		"routing": {
			"send": {
				"property": "firstName",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Put"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Last Name",
		"name": "lastName",
		"type": "string",
		"default": "Doe",
		"description": "Contact Last Name",
		"routing": {
			"send": {
				"property": "lastName",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Put"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/lids/count",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get Lids Count"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Get Lids Count"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/lids/{lid}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Find PN By Lid"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Find PN By Lid"
				]
			}
		}
	},
	{
		"displayName": "Lid",
		"name": "lid",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Find PN By Lid"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/lids/pn/{phoneNumber}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Find LID By Phone Number"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Find LID By Phone Number"
				]
			}
		}
	},
	{
		"displayName": "Phone Number",
		"name": "phoneNumber",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Find LID By Phone Number"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Create Group"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Create Group"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "name",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Create Group"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Participants",
		"name": "participants",
		"type": "json",
		"default": "[\n  {\n    \"id\": \"123456789@c.us\"\n  }\n]",
		"routing": {
			"send": {
				"property": "participants",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Create Group"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups"
				]
			}
		}
	},
	{
		"displayName": "Sort By",
		"name": "sortBy",
		"description": "Sort by field",
		"default": "id",
		"type": "options",
		"options": [
			{
				"name": "Id",
				"value": "id"
			},
			{
				"name": "Subject",
				"value": "subject"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sortBy",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups"
				]
			}
		}
	},
	{
		"displayName": "Sort Order",
		"name": "sortOrder",
		"description": "Sort order - <b>desc</b>ending (Z => A, New first) or <b>asc</b>ending (A => Z, Old first)",
		"default": "desc",
		"type": "options",
		"options": [
			{
				"name": "Desc",
				"value": "desc"
			},
			{
				"name": "Asc",
				"value": "asc"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sortOrder",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups"
				]
			}
		}
	},
	{
		"displayName": "Limit",
		"name": "limit",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "limit",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups"
				]
			}
		}
	},
	{
		"displayName": "Offset",
		"name": "offset",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "offset",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups"
				]
			}
		}
	},
	{
		"displayName": "Exclude",
		"name": "exclude",
		"description": "Exclude fields",
		"default": "[\n  null\n]",
		"type": "json",
		"routing": {
			"send": {
				"type": "query",
				"property": "exclude",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/join-info",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Join Info Group"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Join Info Group"
				]
			}
		}
	},
	{
		"displayName": "Code",
		"name": "code",
		"required": true,
		"description": "Group code (123) or url (https://chat.whatsapp.com/123)",
		"default": "https://chat.whatsapp.com/1234567890abcdef",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "code",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Join Info Group"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups/join",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Join Group"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Join Group"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Code",
		"name": "code",
		"type": "string",
		"default": "https://chat.whatsapp.com/1234567890abcdef",
		"description": "Group code (123) or url (https://chat.whatsapp.com/123)",
		"routing": {
			"send": {
				"property": "code",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Join Group"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/count",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups Count"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Groups Count"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups/refresh",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Refresh Groups"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Refresh Groups"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Group"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Group"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Group"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/{session}/groups/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Delete Group"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Delete Group"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Delete Group"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups/{id}/leave",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Leave Group"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Leave Group"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Leave Group"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/{id}/picture",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Chat Picture"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Chat Picture"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Chat Picture"
				]
			}
		}
	},
	{
		"displayName": "Refresh",
		"name": "refresh",
		"description": "Refresh the picture from the server (24h cache by default). Do not refresh if not needed, you can get rate limit error",
		"default": false,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "refresh",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Chat Picture"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/groups/{id}/picture",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Picture"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Picture"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Picture"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "File",
		"name": "file",
		"type": "json",
		"default": "{\n  \"mimetype\": \"image/jpeg\",\n  \"filename\": \"filename.jpg\",\n  \"url\": \"https://github.com/devlikeapro/waha/raw/core/examples/waha.jpg\"\n}",
		"routing": {
			"send": {
				"property": "file",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Picture"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/{session}/groups/{id}/picture",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Delete Picture"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Delete Picture"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Delete Picture"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/groups/{id}/description",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Description"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Description"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Description"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Description",
		"name": "description",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "description",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Description"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/groups/{id}/subject",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Subject"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Subject"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Subject"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Subject",
		"name": "subject",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "subject",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Subject"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/groups/{id}/settings/security/info-admin-only",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Info Admin Only"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Info Admin Only"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Info Admin Only"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Admins Only",
		"name": "adminsOnly",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "adminsOnly",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Info Admin Only"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/{id}/settings/security/info-admin-only",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Info Admin Only"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Info Admin Only"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Info Admin Only"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/{session}/groups/{id}/settings/security/messages-admin-only",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Messages Admin Only"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Messages Admin Only"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Messages Admin Only"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Admins Only",
		"name": "adminsOnly",
		"type": "boolean",
		"default": true,
		"routing": {
			"send": {
				"property": "adminsOnly",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Set Messages Admin Only"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/{id}/settings/security/messages-admin-only",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Messages Admin Only"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Messages Admin Only"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Messages Admin Only"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/{id}/invite-code",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Invite Code"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Invite Code"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Invite Code"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups/{id}/invite-code/revoke",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Revoke Invite Code"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Revoke Invite Code"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Revoke Invite Code"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/{id}/participants",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Participants"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Participants"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Participants"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/groups/{id}/participants/v2",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Group Participants"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Group Participants"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Get Group Participants"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups/{id}/participants/add",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Add Participants"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Add Participants"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Add Participants"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Participants",
		"name": "participants",
		"type": "json",
		"default": "[\n  {\n    \"id\": \"123456789@c.us\"\n  }\n]",
		"routing": {
			"send": {
				"property": "participants",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Add Participants"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups/{id}/participants/remove",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Remove Participants"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Remove Participants"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Remove Participants"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Participants",
		"name": "participants",
		"type": "json",
		"default": "[\n  {\n    \"id\": \"123456789@c.us\"\n  }\n]",
		"routing": {
			"send": {
				"property": "participants",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Remove Participants"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups/{id}/admin/promote",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Promote To Admin"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Promote To Admin"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Promote To Admin"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Participants",
		"name": "participants",
		"type": "json",
		"default": "[\n  {\n    \"id\": \"123456789@c.us\"\n  }\n]",
		"routing": {
			"send": {
				"property": "participants",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Promote To Admin"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/groups/{id}/admin/demote",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Demote To Admin"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Demote To Admin"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "Group ID",
		"default": "123123123@g.us",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Demote To Admin"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Participants",
		"name": "participants",
		"type": "json",
		"default": "[\n  {\n    \"id\": \"123456789@c.us\"\n  }\n]",
		"routing": {
			"send": {
				"property": "participants",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Groups"
				],
				"operation": [
					"Demote To Admin"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/presence",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Set Presence"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Set Presence"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"description": "Chat ID - either group id or contact id",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Set Presence"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Presence",
		"name": "presence",
		"type": "options",
		"default": "offline",
		"options": [
			{
				"name": "Offline",
				"value": "offline"
			},
			{
				"name": "Online",
				"value": "online"
			},
			{
				"name": "Typing",
				"value": "typing"
			},
			{
				"name": "Recording",
				"value": "recording"
			},
			{
				"name": "Paused",
				"value": "paused"
			}
		],
		"routing": {
			"send": {
				"property": "presence",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Set Presence"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/presence",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Get Presence All"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Get Presence All"
				]
			}
		}
	},
	{
		"displayName": "GET /api/{session}/presence/{chatId}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Get Presence"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Get Presence"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Get Presence"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/presence/{chatId}/subscribe",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Subscribe"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Subscribe"
				]
			}
		}
	},
	{
		"displayName": "Chat Id",
		"name": "chatId",
		"required": true,
		"description": "Chat ID",
		"default": "={{ $json.payload.from }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Presence"
				],
				"operation": [
					"Subscribe"
				]
			}
		}
	},
	{
		"displayName": "GET /api/screenshot",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Screenshot"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"default": "={{ $json.session }}",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "session",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Pairing"
				],
				"operation": [
					"Screenshot"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/events",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Events"
				],
				"operation": [
					"Send Event"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Events"
				],
				"operation": [
					"Send Event"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Chat Id",
		"name": "chatId",
		"type": "string",
		"default": "={{ $json.payload.from }}",
		"routing": {
			"send": {
				"property": "chatId",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Events"
				],
				"operation": [
					"Send Event"
				]
			}
		}
	},
	{
		"displayName": "Reply To",
		"name": "reply_to",
		"type": "string",
		"default": "",
		"description": "The ID of the message to reply to - false_11111111111@c.us_AAAAAAAAAAAAAAAAAAAA",
		"routing": {
			"send": {
				"property": "reply_to",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Events"
				],
				"operation": [
					"Send Event"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Event",
		"name": "event",
		"type": "json",
		"default": "{\n  \"name\": \"John's Nail Appointment 💅\",\n  \"description\": \"It's time for your nail care session! 🌟\\\\n\\\\nYou'll be getting a *classic gel manicure* – clean, polished, and long-lasting. 💖\\\\n\\\\n📍 *Location:* Luxe Nail Studio\\\\nWe're on the *2nd floor of the Plaza Mall*, next to the flower shop. Look for the *pink neon sign*!\\\\n\\\\nFeel free to arrive *5–10 mins early* so we can get started on time 😊\",\n  \"startTime\": 2063137000,\n  \"endTime\": null,\n  \"location\": {\n    \"name\": \"Luxe Nail Studio 💅\"\n  },\n  \"extraGuestsAllowed\": false\n}",
		"routing": {
			"send": {
				"property": "event",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Events"
				],
				"operation": [
					"Send Event"
				]
			}
		}
	},
	{
		"displayName": "GET /ping",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Ping"
				]
			}
		}
	},
	{
		"displayName": "GET /health",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Check"
				]
			}
		}
	},
	{
		"displayName": "GET /api/server/version",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "GET /api/server/environment",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Environment"
				]
			}
		}
	},
	{
		"displayName": "All",
		"name": "all",
		"description": "Include all environment variables",
		"default": false,
		"type": "boolean",
		"routing": {
			"send": {
				"type": "query",
				"property": "all",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Environment"
				]
			}
		}
	},
	{
		"displayName": "GET /api/server/status",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Status"
				]
			}
		}
	},
	{
		"displayName": "POST /api/server/stop",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Stop"
				]
			}
		}
	},
	{
		"displayName": "Force",
		"name": "force",
		"type": "boolean",
		"default": false,
		"description": "By default, it gracefully stops the server, but you can force it to terminate immediately.",
		"routing": {
			"send": {
				"property": "force",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Stop"
				]
			}
		}
	},
	{
		"displayName": "GET /api/server/debug/cpu",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Cpu Profile"
				]
			}
		}
	},
	{
		"displayName": "Seconds",
		"name": "seconds",
		"description": "How many seconds to sample CPU",
		"default": 30,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "seconds",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Cpu Profile"
				]
			}
		}
	},
	{
		"displayName": "GET /api/server/debug/heapsnapshot",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Heapsnapshot"
				]
			}
		}
	},
	{
		"displayName": "GET /api/server/debug/browser/trace/{session}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Browser Trace"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Browser Trace"
				]
			}
		}
	},
	{
		"displayName": "Seconds",
		"name": "seconds",
		"required": true,
		"description": "How many seconds to trace",
		"default": 30,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "seconds",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Browser Trace"
				]
			}
		}
	},
	{
		"displayName": "Categories",
		"name": "categories",
		"required": true,
		"description": "Categories to trace (all by default)",
		"default": "[\n  \"*\"\n]",
		"type": "json",
		"routing": {
			"send": {
				"type": "query",
				"property": "categories",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Observability"
				],
				"operation": [
					"Browser Trace"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/media/convert/voice",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				],
				"operation": [
					"Convert Voice"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				],
				"operation": [
					"Convert Voice"
				]
			}
		}
	},
	{
		"displayName": "Url",
		"name": "url",
		"type": "string",
		"default": "https://github.com/devlikeapro/waha/raw/core/examples/voice.mp3",
		"description": "The URL for the voice file",
		"routing": {
			"send": {
				"property": "url",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				],
				"operation": [
					"Convert Voice"
				]
			}
		}
	},
	{
		"displayName": "Data",
		"name": "data",
		"type": "string",
		"default": null,
		"description": "Base64 content of the file",
		"routing": {
			"send": {
				"property": "data",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				],
				"operation": [
					"Convert Voice"
				]
			}
		}
	},
	{
		"displayName": "POST /api/{session}/media/convert/video",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				],
				"operation": [
					"Convert Video"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name",
		"default": "={{ $json.session }}",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				],
				"operation": [
					"Convert Video"
				]
			}
		}
	},
	{
		"displayName": "Url",
		"name": "url",
		"type": "string",
		"default": "https://github.com/devlikeapro/waha/raw/core/examples/video.mp4",
		"description": "The URL for the video file",
		"routing": {
			"send": {
				"property": "url",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				],
				"operation": [
					"Convert Video"
				]
			}
		}
	},
	{
		"displayName": "Data",
		"name": "data",
		"type": "string",
		"default": null,
		"description": "Base64 content of the file",
		"routing": {
			"send": {
				"property": "data",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Media"
				],
				"operation": [
					"Convert Video"
				]
			}
		}
	},
	{
		"displayName": "GET /api/apps",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "Session",
		"name": "session",
		"required": true,
		"description": "Session name to list apps for",
		"default": "={{ $json.session }}",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "session",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"List"
				]
			}
		}
	},
	{
		"displayName": "POST /api/apps",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "Enabled",
		"name": "enabled",
		"type": "boolean",
		"default": true,
		"description": "Enable or disable this app without deleting it. If omitted, treated as enabled (true).",
		"routing": {
			"send": {
				"property": "enabled",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "App",
		"name": "app",
		"type": "options",
		"default": "chatwoot",
		"options": [
			{
				"name": "Chatwoot",
				"value": "chatwoot"
			},
			{
				"name": "Calls",
				"value": "calls"
			}
		],
		"routing": {
			"send": {
				"property": "app",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Config",
		"name": "config",
		"type": "json",
		"default": "{}",
		"routing": {
			"send": {
				"property": "config",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Create"
				]
			}
		}
	},
	{
		"displayName": "GET /api/apps/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Get"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/apps/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Session",
		"name": "session",
		"type": "string",
		"default": "={{ $json.session }}",
		"routing": {
			"send": {
				"property": "session",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "Enabled",
		"name": "enabled",
		"type": "boolean",
		"default": true,
		"description": "Enable or disable this app without deleting it. If omitted, treated as enabled (true).",
		"routing": {
			"send": {
				"property": "enabled",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"property": "id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "App",
		"name": "app",
		"type": "options",
		"default": "chatwoot",
		"options": [
			{
				"name": "Chatwoot",
				"value": "chatwoot"
			},
			{
				"name": "Calls",
				"value": "calls"
			}
		],
		"routing": {
			"send": {
				"property": "app",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Config",
		"name": "config",
		"type": "json",
		"default": "{}",
		"routing": {
			"send": {
				"property": "config",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Update"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/apps/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"default": "",
		"type": "string",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Delete"
				]
			}
		}
	},
	{
		"displayName": "GET /api/apps/chatwoot/locales",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Apps"
				],
				"operation": [
					"Get Languages"
				]
			}
		}
	}
];
	expect(node.description.properties).toEqual(expected);
});
