// pages/prophet.tsx
import { NextPage } from 'next';

interface ProphetQuestion {
  question: string;
  answer: string;
}

const prophetQuestions: ProphetQuestion[] = [
  {
    question: "Who was Hadrat Muhammad (PBUH)?",
    answer: "Hadrat Muhammad (PBUH) was Allah's worshipper and a Prophet and a Messenger of Allah. We belong to his ummah."
  },
  {
    question: "Where was our Prophet Muhammad (PBUH) born?",
    answer: "He was born in Makkah, a city in Arabia."
  },
  {
    question: "What were the names of his father and grandfather?",
    answer: "'Abdullah was the name of his father and 'Abdul-Muttalib was the name of his grandfather."
  },
  {
    question: "Was our Prophet Muhammad (PBUH) greater or lesser in position than the other prophets?",
    answer: "Our Prophet (PBUH) was the greatest of all prophets. He is the holiest of all creation."
  },
  {
    question: "Where did the Prophet Muhammad (PBUH) live all his life?",
    answer: "He remained in the city of his birth, Makkah, for 53 years. Then he went to the Holy City of Madinah in obedience to the Command of Allah. There he lived for 10 years. He left for his heavenly abode at the age of 63."
  },
  {
    question: "What about a person who does not believe in Prophet Muhammad (PBUH)?",
    answer: "One who does not accept Hadrat Muhammad (PBUH) as Allah's prophet is a kaafir."
  },
  {
    question: "What is meant by believing in Hadrat Muhammad (PBUH)?",
    answer: "To believe in Hadrat Muhammad (PBUH) means that we accept him as the Prophet and Messenger of Allah, and that we should love him more than everything except Allah, and that we should obey his orders."
  },
  {
    question: "How do we know that Hadrat Muhammad (PBUH) is Allah's Prophet and Messenger?",
    answer: "It is because the Holy Book, the Qur'aan, bears witness to his prophethood and he (PBUH), in his words and actions, maintained a standard of life to which only prophets can rise. Hadrat Muhammad (PBUH) bore witness to his prophethood and he never lied in his entire life."
  },
  {
    question: "How do we know that the Holy Qur'aan is Allah's book?",
    answer: "Because Hadrat Muhammad (PBUH) said it is a Book of Allah and it was revealed to him by Allah. Its teachings and its style of expression are unmatched and it surpasses and eludes human skill and wisdom."
  }
];

const Prophet: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <main className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-arabic text-emerald-800">
              Prophet Muhammad 
              <span className="text-emerald-600">(PBUH)</span>
            </h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </header>

          {/* Questions and Answers */}
          <div className="space-y-8">
            {prophetQuestions.map((qa, index) => (
              <div 
                key={index}
                className="bg-emerald-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-emerald-900 mb-3">
                  {qa.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {qa.answer}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Prophet;