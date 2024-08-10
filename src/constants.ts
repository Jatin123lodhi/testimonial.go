export const collectionTypeValues = [
  "Text and Video",
  "Only Text",
  "Only Video",
] as const;

export const collectionTypeOptions = collectionTypeValues.map((value) => ({
  value,
  label: value,
}));

export const defaultQuestions = [
  { id: 1, text: "Who are you / what are you working on?" },
  { id: 2, text: "How has [our product / service] helped you?" },
  { id: 3, text: "What is the best thing about [our product / service]" },
];
