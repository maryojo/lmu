import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { 
  SupabaseProvider, 
  SupabaseProviderMeta,
  SupabaseUserGlobalContext,
  SupabaseUserGlobalContextMeta,
  SupabaseUppyUploader,
  SupabaseUppyUploaderMeta,
  SupabaseStorageGetSignedUrl,
  SupabaseStorageGetSignedUrlMeta,
} from "plasmic-supabase"
import QuizComponent from "./components/QuizComponent"
import CustomAccordionItem from "./components/CustomAccordionItem"

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "43GLDCvnvwFaSntiZWsgtz",
      token: "bKGC0xArXcSTQCUVnn0zOgqRqUClX5dasWIqd7iCxtg8TrQqRMIpgIIWjMPtlgGgbA6G8yNfzkO8u1ghmnQ",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

//Register global context
PLASMIC.registerGlobalContext(SupabaseUserGlobalContext, SupabaseUserGlobalContextMeta)

//Register components
PLASMIC.registerComponent(QuizComponent, {
  name: "QuizComponent",
  displayName: "Quiz Component",
  importPath: "./components/QuizComponent",
  props: {
    quizTitle: {
      type: "string",
      defaultValue: "React Quiz",
    },
    onStart: {
      type: "eventHandler",
      argTypes: [],
    },
    resetKey: "number", 
    onQuizComplete: {
      type: "eventHandler",
      argTypes: [
        {
          name: "quizComplete",
          type: "object",
        },
      ],
    }, 
    timeLimit: {
      type: "number",
      defaultValue: 120, // Default to 120 seconds
      description: "Time limit for the entire quiz (in seconds)",
    },
    questions: {
      type: "array",
      defaultValue: [
        {
          question_text: "What is React?",
          options: ["A Library", "A Framework", "A Language"],
          correct_answer: "A Library",
        },
        {
          question_text: "Which hook is used for state management?",
          options: ["useEffect", "useState", "useReducer"],
          correct_answer: "useState",
        },
      ],
    },
  },
});
PLASMIC.registerComponent(CustomAccordionItem, {
  name: "CustomAccordionItem",
  importPath: "./components/CustomAccordionItem",
  props: {
    title: "string",
    children: {
      type: "slot",
      defaultValue: "Accordion content goes here",
    },
    className: {
      type: "class",
    },
  },
});

PLASMIC.registerComponent(SupabaseProvider, SupabaseProviderMeta);
PLASMIC.registerComponent(SupabaseUppyUploader, SupabaseUppyUploaderMeta);
PLASMIC.registerComponent(SupabaseStorageGetSignedUrl, SupabaseStorageGetSignedUrlMeta);

