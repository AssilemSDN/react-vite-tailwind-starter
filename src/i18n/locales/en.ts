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
        to: "/components",
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

  navigation: {
    home: "Home",
    menu1: "Menu 1",
    menu2: "Menu 2",
    menu3: "Menu 3",
  },

  modal: {
    title: "Title",
    closeLabel: "close",
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
    open: "Open Settings",
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
