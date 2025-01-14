// pages/index.tsx
import PlantUMLDiagram from '@/components/PlantUMLDiagram';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Container */}
        <main className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <h1 className="text-4xl font-arabic text-center text-emerald-800 mb-12">
            Imaan
            <span className="block text-lg text-emerald-600 mt-2">
              (Faith)
            </span>
          </h1>

          {/* Kalimah Sections */}
          <div className="space-y-12">
            {/* Kalimah of Islam */}
            <section className="bg-emerald-50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
                The Kalimah of Islam
              </h2>
              <div className="space-y-4">
                <div className="text-right">
                  <p className="text-2xl font-arabic text-gray-800 mb-2">
                    لَا اِلٰهَ اِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ
                  </p>
                  <p className="text-lg text-gray-600 italic">
                    Laa ilaa-ha il-lal-laa-hu muhammadur-rasoolul-laah
                  </p>
                </div>
                <p className="text-gray-800">
                  There is no god except Allah; Muhammad (peace be upon him) is His Messenger.
                </p>
                <p className="text-sm text-emerald-600 italic">
                  This kalimah is also called kalimah tauheed or kalimah tayyibah.
                </p>
              </div>
            </section>

            {/* Kalimah Shahaadah */}
            <section className="bg-emerald-50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
                Kalimah Shahaadah (Declaration of Faith)
              </h2>
              <div className="space-y-4">
                <div className="text-right">
                  <p className="text-2xl font-arabic text-gray-800 mb-2">
                    أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
                  </p>
                  <p className="text-lg text-gray-600 italic">
                    Ash-hadu an-laa ilaaha il-lal-laa-hu wa ash-hadu an-na Muhammadan &apos;ab-duhoo wa rasooluh
                  </p>
                </div>
                <p className="text-gray-800">
                  I bear witness that there is no god except Allah and I bear witness that Muhammad (peace be upon him) is Allah&apos;s worshipper and His Messenger.
                </p>
              </div>
            </section>

            {/* Q&A Section */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-emerald-900 mb-6">
                Essential Questions & Answers
              </h2>
              <div className="space-y-6">
                {questions.map((qa, index) => (
                  <div key={index} className="bg-white border border-emerald-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <p className="font-semibold text-emerald-800 mb-2">Q: {qa.question}</p>
                    <p className="text-gray-700">A: {qa.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightblue
    FontColor black
  }
  :depth(1) {
    BackgroundColor lightgreen
  }
  :depth(2) {
    BackgroundColor lightyellow
  }
  :depth(3) {
    BackgroundColor lightpink
    MaximumWidth 300
  }
  :depth(4) {
    BackgroundColor lightorange
    MaximumWidth 200
  }
  arrow {
    LineColor black
  }
}
</style>

* Imaan (Faith)
** Kalimah of Islam
*** Arabic Text
**** لَا اِلٰهَ اِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ
*** Transliteration
**** Laa ilaa-ha il-lal-laa-hu muhammadur-rasoolul-laah
*** Meaning
**** There is no god except Allah; Muhammad (pbuh) is His Messenger
*** Also Known As
**** Kalimah Tauheed
**** Kalimah Tayyibah

** Kalimah Shahaadah
*** Arabic Text
**** أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
*** Transliteration
**** Ash-hadu an-laa ilaaha il-lal-laa-hu wa ash-hadu an-na Muhammadan 'ab-duhoo wa rasooluh
*** Meaning
**** I bear witness that there is no god except Allah
**** Muhammad (pbuh) is Allah's worshipper and Messenger

left side

** Types of Imaan
*** Imaan Mujmal (Faith in nutshell)
**** Definition
**** Belief in Allah with His names and attributes
**** Acceptance of His orders
**** Verbal declaration and heart's confirmation

*** Imaan Mufas-sal (Elaborated faith)
**** Belief in Allah
**** Belief in Angels
**** Belief in Holy Books
**** Belief in Messengers
**** Belief in Day of Judgment
**** Belief in Divine Decree
***** Divine decree is the belief that Allah has created all laws that govern the universe, including the laws of nature and religion.
**** Belief in Life after Death

** Core Beliefs
*** Creation
**** Allah created everything
***** Allah created us,
***** our fathers and mothers,
***** the skies and the earth,
***** this universe and everything in it.
**** Universe created by His power and command

** Important Terms
*** Kaafir
**** Those who don't believe in Allah
*** Mushrik
**** Those who worship others besides Allah
**** Those who believe in multiple gods
*** Consequence
**** No pardon for Kaafir and Mushrik
**** Will face trouble in hereafter

@endmindmap
`}
        />
        </main>
      </div>
    </div>
  );
};

// Data
const questions = [
  {
    question: "What is imaan (faith)?",
    answer: "Imaan is to have faith in something and to proclaim it."
  },
  {
    question: "What is our imaan mujmal (faith in a nutshell)?",
    answer: `Imaan mujmal is: aamantu bil-laahi kamaa huwa bi as-maa-i-hi wa sifaatihi wa qabiltu jamee'a ahkaamihi. 'iqraarum bil-lisaani wa tasdeequm bil-qalb.

    I believe in Allah as He is with all His names and attributes and I accept all of His orders. It is said with the tongue and confirmed in the heart.`
  },
  {
    question: "What is our imaan mufas-sal (elaborated faith)?",
    answer: `Imaan mufas-sal is: aamantu bil-laahi wa ma-laa-i-katihi wa kutubihi wa rusulihi walyaumil-aakhiri wal-qadri khairihi wa shar-rihi minal-laahi ta'aalaa wal-ba'thi ba'dal-maut.

    I believe in Allah, in His angels, in His books, in His messengers, in the Day of Judgement, and (I believe) that all good and evil is decreed by Allah, and in the life after death.`
  },
  {
    question: "Who created you?",
    answer: "Allah created us, our fathers and mothers, the skies and the earth, this universe and everything in it."
  },
  {
    question: "How did Allah create the universe?",
    answer: "By His power and command."
  },
  {
    question: "What are the people called who do not believe in Allah?",
    answer: "They are called kaafir (unbelievers)."
  },
  {
    question: "What are the people called who do not worship Allah but worship other things, or those who believe in two or three gods?",
    answer: "Such people are called kaafir and mushrik."
  },
  {
    question: "Will Allah pardon or forgive the mushrik or the kaafir?",
    answer: "Kaafir and mushrik will never be pardoned. They will always be kept in great pain and trouble in the hereafter."
  }
];

export default Home;