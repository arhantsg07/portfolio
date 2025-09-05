import { Mail } from "lucide-react";
import { useTheme } from "../context/themeContext";

function Contact() {
  const { themeClasses } = useTheme();

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className={`text-3xl font-bold mb-8 ${themeClasses.text}`}>
          Get In Touch
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          I'm open to discussing new opportunities, interesting projects, or
          just having a chat about technology.
        </p>

        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="mailto:sfarhant098@gmail.com"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>sfarhant098@gmail.com</span>
          </a>
        </div>

        <div
          className={`${themeClasses.projectCardBg} rounded-lg p-8 border border-gray-700`}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center justify-center space-x-2">
            {/* <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> */}
            <span className={`${themeClasses.skillText}`}>
              Find me on LinkedIn
            </span>
          </h3>
          <p className={`${themeClasses.skillText} mb-4`}>
            Check out my LinkedIn profile page
          </p>
          <a
            href="https://www.linkedin.com/in/arhant-gourkhede-9b3515285"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            {/* <svg
              className="w-5 h-5"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg> */}
            <svg
              className="w-6 h-6"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452H17.21V14.8c0-1.345-.026-3.076-1.876-3.076-1.876 0-2.163 1.462-2.163 2.973v5.755H9.01V9h3.1v1.561h.043c.434-.82 1.494-1.685 3.074-1.685 3.29 0 3.894 2.165 3.894 4.977v6.599zM5.337 7.433a1.805 1.805 0 1 1 0-3.61 1.805 1.805 0 0 1 0 3.61zM6.775 20.452H3.89V9h2.885v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <span>Visit LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
