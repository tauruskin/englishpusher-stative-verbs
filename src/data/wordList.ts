/**
 * EnglishPusher Trivia — Word List Config
 * Topic: Stative Verbs
 *
 * Edit this file to swap vocabulary for different lessons.
 * Each entry needs: word (English), translation (Ukrainian), example (sentence with ___ blank).
 */

export interface WordEntry {
  word: string;
  translation: string;
  example: string;
}

const wordList: WordEntry[] = [
  { word: "like", translation: "подобається", example: "I really ___ watching films on weekends." },
  { word: "love", translation: "любити", example: "She absolutely ___ reading books before bed." },
  { word: "hate", translation: "ненавидіти", example: "He ___ waking up early in the morning." },
  { word: "want", translation: "хотіти", example: "I ___ a cup of coffee right now." },
  { word: "need", translation: "потребувати, мати потребу, мати необхідність", example: "You ___ a passport to travel abroad." },
  { word: "prefer", translation: "надавати перевагу", example: "I ___ tea to coffee in the morning." },
  { word: "agree", translation: "погоджуватися, домовитися", example: "I completely ___ with your opinion on this matter." },
  { word: "mind", translation: "заперечувати", example: "Do you ___ if I open the window?" },
  { word: "own", translation: "володіти", example: "She ___ a small apartment in the city centre." },
  { word: "sound", translation: "звучати", example: "That idea ___ really interesting to me." },
  { word: "hear", translation: "чути", example: "Can you ___ the music from the next room?" },
  { word: "disagree", translation: "не погоджуватися", example: "I ___ with his decision to leave the company." },
  { word: "satisfy", translation: "задовольняти", example: "A small snack doesn't ___ me when I'm really hungry." },
  { word: "doubt", translation: "сумніватися", example: "I ___ that he will arrive on time." },
  { word: "wish", translation: "бажати", example: "I ___ I could travel the world every year." },
  { word: "dislike", translation: "не любити", example: "She ___ crowded places and noisy restaurants." },
  { word: "deserve", translation: "заслуговувати", example: "You ___ a rest after working so hard all week." },
  { word: "lack", translation: "бракувати", example: "The project ___ proper funding to succeed." },
  { word: "know", translation: "знати", example: "Do you ___ the answer to this question?" },
  { word: "realise", translation: "усвідомлювати", example: "I didn't ___ how late it was until I checked my phone." },
  { word: "suppose", translation: "припускати", example: "I ___ we should leave early to avoid traffic." },
  { word: "mean", translation: "означати", example: "What does this word ___ in English?" },
  { word: "understand", translation: "розуміти", example: "I don't ___ why he made that decision." },
  { word: "believe", translation: "вірити", example: "I ___ that hard work always pays off." },
  { word: "remember", translation: "пам'ятати", example: "Do you ___ the name of that restaurant we visited?" },
  { word: "recognise", translation: "впізнавати", example: "I ___ her voice immediately when she called." },
  { word: "appear", translation: "являтися", example: "She ___ to be very confident in her presentation." },
  { word: "taste", translation: "мати смак", example: "This soup ___ absolutely delicious!" },
  { word: "astonish", translation: "дивувати", example: "Her performance never fails to ___ the audience." },
  { word: "please", translation: "догоджати, робити приємність", example: "It's impossible to ___ everyone all the time." },
  { word: "promise", translation: "обіцяти", example: "I ___ I will call you as soon as I arrive." },
  { word: "think", translation: "вважати", example: "I ___ this is the best solution for the problem." },
  { word: "imagine", translation: "уявляти", example: "Can you ___ living without a smartphone?" },
  { word: "be", translation: "бути", example: "She wants to ___ a doctor when she grows up." },
  { word: "involve", translation: "залучати", example: "The project will ___ a lot of teamwork and planning." },
  { word: "measure", translation: "вимірювати", example: "Can you ___ the length of this table for me?" },
  { word: "belong", translation: "належати", example: "This bag ___ to the woman sitting by the window." },
  { word: "fit", translation: "підходити", example: "These shoes don't ___ me — they're too small." },
  { word: "contain", translation: "містити", example: "This drink ___ a lot of sugar and calories." },
  { word: "consist", translation: "складатися", example: "The team ___ of five experienced professionals." },
  { word: "seem", translation: "здаватися", example: "He ___ tired after the long flight." },
  { word: "depend", translation: "залежати", example: "The price will ___ on the size of the order." },
  { word: "matter", translation: "мати значення", example: "It doesn't ___ what time we arrive — the party goes all night." },
  { word: "see", translation: "бачити", example: "I can ___ the mountains from my window on a clear day." },
  { word: "look", translation: "виглядати", example: "You ___ amazing in that dress!" },
  { word: "smell", translation: "пахнути", example: "The fresh bread ___ wonderful in the morning." },
  { word: "deny", translation: "заперечувати", example: "He tried to ___ that he had made a mistake." },
  { word: "impress", translation: "вражати", example: "Her knowledge of history never fails to ___ her teachers." },
  { word: "surprise", translation: "дивувати", example: "The test results ___ everyone in the class." },
  { word: "feel", translation: "відчувати (= мати думку)", example: "I ___ that we should give him another chance." },
  { word: "concern", translation: "бути стурбованим", example: "The rising prices ___ many families in the country." },
  { word: "have", translation: "мати", example: "I ___ a meeting at 9 o'clock tomorrow morning." },
  { word: "include", translation: "включати в себе", example: "The price ___ breakfast and all taxes." },
  { word: "possess", translation: "володіти", example: "She ___ a rare talent for learning languages quickly." },
];
export const enabledQuestionTypes = [
  'multipleChoice',
  'reversed', 
  'fillBlank',
  'trueOrFalse',
  'matching'
];
export default wordList;
