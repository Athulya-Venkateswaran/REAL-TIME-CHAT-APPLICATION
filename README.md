# REAL-TIME-CHAT-APPLICATION

COMPANY: CODTECH IT SOLUTIONS

NAME: ATHULYA VENKATESWARAN

INTERN ID: CT04DG1746

DOMAIN: FRONT END DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSH KUMAR

DESCRIPTION: The objective of this project was to design and build a fully functional real-time chat application using WebSockets for bi-directional communication and React.js for the user interface. The primary focus was on enabling instant messaging between multiple users in a responsive and scalable environment. This chat app simulates core messaging functionality found in real-world communication tools such as WhatsApp Web, Slack, or Discord.
Tools and Technologies Used:
VS Code:
Visual Studio Code (VS Code) was the chosen IDE for writing and organizing the code. Its integrated terminal, GitHub support, live server extensions, and syntax highlighting made development efficient and manageable.

React.js (Frontend):
React is a JavaScript library used to build user interfaces. I used it to create the chat interface, handle user input, update the UI dynamically as new messages arrive, and maintain the component-based architecture.

WebSocket (ws library in Node.js backend):
WebSocket provides real-time communication between the client and server. Unlike traditional HTTP requests, WebSocket maintains an open connection that allows for continuous data flow without the need to refresh or resend requests.

Node.js and Express.js (Backend):
The backend was built using Node.js and Express. Node.js enabled non-blocking event-driven communication, and Express provided a basic HTTP server wrapper. WebSocket Server (ws) was attached to this server to manage the communication channel.

CSS:
The user interface was styled using custom CSS. A modern and responsive layout was designed with neon-like aesthetics and mobile responsiveness in mind. Key CSS techniques used include flexbox, media queries, and custom animations.

GitHub:
Git and GitHub were used for version control and code backup. This helped in tracking project progress and making the code easily accessible for collaboration or deployment.

Project Structure:
The project consists of two major parts:
Client-side (Frontend): Built with React
Connects to WebSocket server
Displays message history
Sends and receives messages
Responsive CSS styling for a user-friendly experience

Server-side (Backend):
Built with Node.js and ws WebSocket library
Accepts WebSocket connections
Broadcasts messages to all connected users
Maintains temporary message history in memory

How It Works:
When a user visits the chat application in their browser, the React app initiates a WebSocket connection to the backend server. The server then sends the current chat history (stored in memory) to the newly connected client. As users type messages and click "Send," the message is transmitted to the server, which immediately broadcasts it to all other users connected via WebSocket. This enables real-time messaging functionality.The frontend automatically updates using React's state management, and the CSS ensures the layout is visually appealing and works across desktop and mobile devices.

Applications of This Project:
This real-time chat application demonstrates the foundation for many real-world use cases:
Online customer support chat interfaces
Collaborative team tools like Slack or Microsoft Teams
Gaming lobbies for multiplayer interaction
Virtual classroom or webinar Q&A tools
Internal messaging platforms for businesses

It also teaches core concepts in web development such as:
Client-server architecture
Real-time communication protocols (WebSocket)
Component-based frontend frameworks (React)
UI/UX best practices
Cross-platform responsive design

In your server.js file, this line holds all messages:
let messageHistory = [];
That means:
Messages are stored only temporarily in RAM.
If the server restarts (or crashes), all chat history is lost.
There is no database — it does not save messages to a file or persistent storage.

This project allowed me to gain hands-on experience with full-stack web development using modern tools and technologies. I learned how to build a scalable real-time system using WebSockets and how to create an engaging frontend interface using React and CSS. The use of VS Code streamlined my workflow, and deploying the project on GitHub helped in managing versions and showcasing my work to others. This experience has enhanced my understanding of both frontend and backend development, as well as how to build real-world, real-time applications that solve practical problems.

OUTPUT:

