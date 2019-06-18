import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  'en-US': {
    translation: {
      "Welcome": "Welcome!",
      "Message": "These are your tasks for today",
      "harvesting title": "Harvesting",
      "harvesting task 1": "Sit cupidatat dolor anim nisi pariatur mollit.",
      "seeding title": "Seeding",
      "seeding task 1": "Amet qui excepteur consequat ullamco proident ipsum est cupidatat.",
      "irrigation title": "Irrigation",
      "irrigation task 1": "Aliqua aute quis esse aliqua eu dolore Lorem deserunt aute culpa.",
      "Add notes": "Add notes"
    }
  },
  'de-DE': {
    translation: {
      "Welcome": "Willkommen!",
      "Message": "Das sind deine aufgaben für heute",
      "harvesting title": "Ernte",
      "harvesting task 1": "Nostrud laborum culpa sit deserunt nisi laboris incididunt eu aliquip id.",
      "seeding title": "Aussaat",
      "seeding task 1": "Sunt irure do nostrud fugiat laborum id irure tempor nulla ea quis eu aliquip.",
      "irrigation title": "Bewässerung",
      "irrigation task 1": "Officia enim non incididunt enim sint officia ea adipisicing id exercitation laborum et id.",
      "Add notes": "Notizen hinzufügen"
    }
  },
  'pt-BR': {
    translation: {
      "Welcome": "Bem vinda!",
      "Message": "estas são suas tarefas para hoje",
      "harvesting title": "Colheita",
      "harvesting task 1": "Et ipsum anim aute consectetur non excepteur id ad nostrud nostrud fugiat enim.",
      "seeding title": "Semeando",
      "seeding task 1": "Commodo cillum voluptate in non dolore enim reprehenderit ullamco commodo do velit id laborum magna.",
      "irrigation title": "Irrigação",
      "irrigation task 1": "Eiusmod minim id amet do sint elit dolore laboris sit aliqua elit.",
      "Add notes": "Adicionar notas"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en-US",

    keySeparator: false, 

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
