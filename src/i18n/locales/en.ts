export const en = {
  app: {
    title: "My Project",
    loading: "Loading...",
  },

  pages: {
    home: {
      title: "Home",
      description: "Explore the features and components available in this starter",
      firstCard: {
        title: "Components",
        subtitle: "Build your interfaces faster",
        description:
          "Discover reusable and customizable components to create engaging user interfaces.",
      },
      secondCard: {
        title: "Customizable Theme",
        subtitle: "Easily adapt the visual identity",
        description:
          "Customize the look of your application with light/dark theme support and automatic system theme detection.",
      },
      thirdCard: {
        title: "Internationalization",
        subtitle: "Multilingual support",
        description:
          "Benefit from multilingual support with the ability to switch between different languages.",
      },
      horizontalCard: {
        title: "A foundation designed to scale",
        subtitle: "Start simple, grow without rebuilding everything.",
        description:
          "This starter is designed to help you get up and running quickly and develop your application without having to rebuild everything.",
      },
    },

    menu1: {
      title: "Menu 1",
    },

    menu2: {
      title: "Menu 2",
    },

    menu3: {
      title: "Menu 3",
    },

    components: {
      title: "Components",
      description: "Overview of the UI components available in this starter.",

      sections: {
        cards: "Cards",
        buttons: "Buttons",
        modal: "Modal",
        form: "Form",
      },

      cards: {
        static: {
          title: "Static card",
          description: "A non-interactive card without navigation.",
          content: "Free-form content inside the card.",
          action: "Action",
        },

        clickable: {
          title: "Clickable card",
          description: "Navigates to the home page when clicked.",
          content: "The entire card is a link with a hover indicator.",
        },
      },

      buttons: {
        primary: "Primary",
        secondary: "Secondary",
        success: "Success",
        danger: "Danger",
        ghost: "Ghost",
        small: "Small",
        medium: "Medium",
        large: "Large",
        sendEmail: "Send an email",
        delete: "Delete",
        loading: "Loading",
        disabled: "Disabled",
        notFound: "Open a missing page",
      },

      modal: {
        open: "Open modal",
        title: "Modal title",
        cancel: "Cancel",
        confirm: "Confirm",
        content: "Modal content with focus trapping and keyboard closing support (Escape).",
      },

      form: {
        title: "Contact",
        description: "All fields marked with * are required.",

        name: {
          label: "Name",
          placeholder: "John Doe",
        },

        email: {
          label: "Email",
          placeholder: "john.doe@email.com",
          error: "Invalid email address",
        },

        subject: {
          label: "Subject",
          hint: "Choose the closest category",
          placeholder: "Select a subject",

          options: {
            general: "General question",
            support: "Technical support",
            billing: "Billing",
          },
        },

        actions: {
          reset: "Reset",
          submit: "Send",
        },
      },
    },

    notFound: {
      title: "Page not found",
      code: "Error 404",
      description:
        "The page you are looking for does not exist, has been moved, or is no longer available.",
      back: "Go back",
      home: "Back to home",
    },

    underConstruction: "This feature is not available yet.",
  },

  breadcrumb: {
    label: "Breadcrumb",
  },

  navigation: {
    home: "Home",
    menu1: "Menu 1",
    menu2: "Menu 2",
    menu3: "Menu 3",
    components: "Components",
  },

  modal: {
    title: "Title",
    closeLabel: "Close",
    close: "Close",
    content: "Lorem ipsum",
  },

  header: {
    searchPlaceholder: "Search...",
    primaryAction: "Button",
  },

  sidebar: {
    title: "Navigation",
    collapse: "Collapse navigation",
    expand: "Expand navigation",
  },

  settings: {
    title: "Settings",
    open: "Open settings",
  },

  theme: {
    label: "Theme",
    system: "System",
    light: "Light",
    dark: "Dark",
  },

  language: {
    label: "Language",
    french: "French",
    english: "English",
  },
} as const;
