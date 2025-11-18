# 📱 Contacts Web Application

A modern and intuitive web-based contact management system built with Node.js and Express.js. This application provides a clean interface for managing your personal or professional contacts with full CRUD (Create, Read, Update, Delete) functionality.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## ✨ Features

- **📝 Add Contacts**: Create new contact entries with name, email, and phone number
- **👀 View Contacts**: Display all contacts in an organized list
- **✏️ Edit Contacts**: Update existing contact information
- **🗑️ Delete Contacts**: Remove contacts from your list
- **🔍 Contact Details**: View detailed information for each contact
- **✅ Form Validation**: Built-in validation for email and Indonesian phone numbers
- **⚡ Flash Messages**: User-friendly notifications for all operations
- **💾 JSON Storage**: Simple and efficient file-based data storage

## 🛠️ Tech Stack

This project is built using the following technologies:

- **Backend Framework**: Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Middleware**:
  - Morgan (HTTP request logger)
  - Express-session (Session management)
  - Connect-flash (Flash messages)
  - Cookie-parser (Cookie handling)
- **Validation**: Express-validator
- **Development**: Nodemon (Auto-restart on changes)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)

## 🚀 Installation

Follow these steps to get the application up and running on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/ketsar28/contacts-web-app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd contacts-web-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

5. **Access the application**

   Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 📖 Usage

### Adding a Contact
1. Navigate to the "Add Contact" page
2. Fill in the contact information (name, email, phone number)
3. Click "Submit" to save the contact
4. The system will validate your input and display appropriate messages

### Viewing Contacts
- All contacts are displayed on the main contacts page
- Click on any contact to view detailed information

### Editing a Contact
1. Click the "Edit" button next to the contact you want to modify
2. Update the information in the form
3. Click "Update" to save changes

### Deleting a Contact
- Click the "Delete" button next to the contact you want to remove
- The contact will be permanently deleted from your list

## 📁 Project Structure

```
contacts-web-app/
│
├── data/                   # JSON data storage
│   └── data.json          # Contact data file
│
├── views/                 # EJS templates
│   ├── layouts/          # Layout components
│   │   ├── main-component.ejs
│   │   ├── nav.ejs
│   │   └── profile.ejs
│   ├── add.ejs           # Add contact form
│   ├── edit.ejs          # Edit contact form
│   ├── contacts.ejs      # Contacts list
│   ├── detail.ejs        # Contact details
│   ├── home.ejs          # Home page
│   └── about.ejs         # About page
│
├── public/               # Static files (CSS, JS, images)
│
├── app.js               # Main application file
├── contacts.js          # Contact management functions
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## 🎯 Key Functions

### `contacts.js` Module

- `loadContacts()` - Loads all contacts from JSON file
- `detailContact(nama)` - Retrieves a specific contact by name
- `addContact(data)` - Adds a new contact
- `cekDuplikat(data)` - Checks for duplicate contact names
- `deleteContact(data)` - Deletes a contact
- `updateContact(newContact)` - Updates existing contact information

## 🔧 Configuration

The application runs on port **8000** by default. You can modify this in `app.js`:

```javascript
const port = 8000;
```

## 🌟 Future Enhancements

- [ ] Search functionality
- [ ] Contact groups/categories
- [ ] Import/Export contacts (CSV, vCard)
- [ ] User authentication
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Profile pictures for contacts
- [ ] Responsive mobile design improvements

## 🐛 Known Issues

No known issues at this time. If you encounter any problems, please open an issue on GitHub.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ketsar28/contacts-web-app/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📱 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ketsar28/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ketsarali/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ketsar.aaw/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/ketsar)
[![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)](https://share.streamlit.io/user/ketsar28)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send/?phone=6285155343380&text=Hello%20Ketsar!)

</div>

## 📞 Contact

**Ketsar Ali**

- GitHub: [@ketsar28](https://github.com/ketsar28/)
- LinkedIn: [Ketsar Ali](https://www.linkedin.com/in/ketsarali/)
- Email: Feel free to reach out through WhatsApp or LinkedIn

---

<div align="center">

## 📄 License & Copyright

**© 2025 Ketsar Ali. All Rights Reserved.**

This project is created and maintained by **Ketsar Ali**.

Made with ❤️ by [Ketsar Ali](https://github.com/ketsar28)

</div>
