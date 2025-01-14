// pages/adhaan.tsx
import { NextPage } from "next";

interface AdhaaanSection {
  arabic: string;
  transliteration: string;
  translation: string;
  repetitions?: string;
  note?: string;
}

interface AdhaanBenefit {
  text: string;
}

interface PrayerExpression {
  arabic: string;
  name: string;
  note?: string;
  transliteration?: string;
  translation?: string;
}

const AdhaanPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <main className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <h1 className="text-4xl font-arabic text-center text-emerald-800 mb-12">
            Adhaan (Call to Prayer)
          </h1>

          {/* What is Adhaan */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-6">
              What is Adhaan?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              When the time for salaah comes, a man stands up before the prayer
              and calls aloud these words:
            </p>

            {/* Adhaan Sections */}
            <div className="space-y-6">
              {adhaanSections.map((section, index) => (
                <div key={index} className="bg-emerald-50 rounded-xl p-6">
                  <div className="text-right mb-4">
                    <p className="text-2xl font-arabic text-gray-800">
                      {section.arabic}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="italic text-emerald-700">
                      {section.transliteration}
                    </p>
                    <p className="text-gray-700">{section.translation}</p>
                    {section.repetitions && (
                      <p className="text-sm text-emerald-600">
                        ({section.repetitions})
                      </p>
                    )}
                    {section.note && (
                      <p className="text-sm text-gray-500 italic">
                        {section.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Iqaamah Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-6">
              Iqaamah or Takbeer
            </h2>
            <div className="bg-emerald-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                When people stand up for salaah, a person repeats the words of
                adhaan, this is called iqaamah or takbeer. The words of adhaan
                are repeated exactly the same in iqaamah but, after hay-ya
                &apos;alal-falaah, one says 2 times:
              </p>
              <div className="text-right mb-4">
                <p className="text-2xl font-arabic text-gray-800">
                  قَدْ قَامَتِ الصَّلَاةُ
                </p>
              </div>
              <div className="space-y-2">
                <p className="italic text-emerald-700">Qad qaamatis-salaah</p>
                <p className="text-gray-700">The prayer is ready</p>
              </div>
            </div>
          </div>

          {/* Important Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-6">
              Important Terms
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {terms.map((term, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-emerald-100 rounded-xl p-6"
                >
                  <h3 className="font-semibold text-emerald-800 mb-2">
                    {term.name}
                  </h3>
                  <p className="text-gray-700">{term.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits of Salaah */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-6">
              Benefits of Salaah
            </h2>
            <div className="bg-emerald-50 rounded-xl p-6">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-600 mr-2">♦</span>
                    <span className="text-gray-700">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prayer Expressions */}
          <div>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-6">
              Expressions in Salaah
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {prayerExpressions.map((expression, index) => (
                <div key={index} className="bg-emerald-50 rounded-xl p-4">
                  <div className="space-y-2">
                    {expression.arabic && (
                      <p className="text-right text-xl font-arabic">
                        {expression.arabic}
                      </p>
                    )}
                    <p className="font-semibold text-emerald-800">
                      {expression.name}
                    </p>
                    {expression.transliteration && (
                      <p className="italic text-emerald-700">
                        {expression.transliteration}
                      </p>
                    )}
                    {expression.translation && (
                      <p className="text-gray-700">{expression.translation}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Footer Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-6 text-center">
              Additional Information
            </h2>
            <div className="bg-emerald-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Q:</span> What are the wordings
                of the above-mentioned expressions? Please recite a few Surah as
                well.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <span className="font-semibold">A:</span> The wordings of the
                expressions are:
              </p>
              <div className="mt-4">
                <p className="text-right text-2xl font-arabic text-gray-800">
                  اللهُ أَكْبَر
                </p>
                <p className="italic text-emerald-700">Allaahu akbar</p>
                <p className="text-gray-700">Allah is the Greatest</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const adhaanSections: AdhaaanSection[] = [
  {
    arabic: "اللهُ أَكْبَر",
    transliteration: "Allaahu akbar",
    translation: "Allah is the Greatest",
    repetitions: "4 times",
  },
  {
    arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ",
    transliteration: "Ash-hadu an-laa ilaaha il-lal-laah",
    translation: "I bear witness that there is no god except Allah",
    repetitions: "2 times",
  },
  {
    arabic: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ",
    transliteration: "Ash-hadu an-na Muhammadar-rasoolul-laah",
    translation: "I declare that Muhammad is Allah's Messenger",
    repetitions: "2 times",
  },
  {
    arabic: "حَيَّ عَلَى الصَّلَاةِ",
    transliteration: "Hay-ya 'alas-salaah",
    translation: "Come for salaah",
    repetitions: "2 times",
    note: "Turn head to the right",
  },
  {
    arabic: "حَيَّ عَلَى الْفَلَاحِ",
    transliteration: "Hay-ya 'alal-falaah",
    translation: "Come to success",
    repetitions: "2 times",
    note: "Turn head to the left",
  },
  {
    arabic: "اللهُ أَكْبَر",
    transliteration: "Allaahu akbar",
    translation: "Allah is the Greatest",
    repetitions: "2 times",
  },
  {
    arabic: "لَا إِلٰهَ إِلَّا اللهُ",
    transliteration: "Laa ilaaha il-lal-laah",
    translation: "There is no god except Allah",
  },
  {
    arabic: "الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ",
    transliteration: "As-salaatu khairum-minan-naum",
    translation: "Prayer is better than sleep",
    note: "Said only in Fajr adhaan after Hay-ya 'alal-falaah (2 times)",
  },
];

const terms = [
  {
    name: "Mu-adh-dhin",
    description: "The person who recites adhaan",
  },
  {
    name: "Mukab-bir",
    description: "The person who recites takbeer",
  },
  {
    name: "Salaah bil-jamaa'ah",
    description: "Prayer offered in congregation",
  },
  {
    name: "Imaam",
    description: "The person who leads the jamaa'ah",
  },
  {
    name: "Muqtadi",
    description: "A person who says salaah behind the imaam",
  },
  {
    name: "Munfarid",
    description: "Person who says salaah alone",
  },
];

const benefits: AdhaanBenefit[] = [
  {
    text: "The body and clothes of a namaazi (musalli) are always neat and clean.",
  },
  {
    text: "Allah, the Almighty, is pleased with one who says salaah.",
  },
  {
    text: "Prophet Muhammad (ﷺ) is pleased with a musalli.",
  },
  {
    text: "Allah, the Almighty, favours those who pray salaah.",
  },
  {
    text: "Good men hold a musalli in high esteem.",
  },
  {
    text: "A musalli is saved from many evil deeds.",
  },
  {
    text: "Allah, the Almighty, keeps a musalli in peace and comfort after his death.",
  },
];

const prayerExpressions: PrayerExpression[] = [
  {
    arabic: "تَكْبِير",
    name: "Takbeer",
  },
  {
    arabic: "ثَناء",
    name: "Thana",
  },
  {
    arabic: "تَعَوُّذ",
    name: "Ta-'aw-wudh",
  },
  {
    arabic: "تَسْمِيَة",
    name: "Tasmiyah",
  },
  {
    arabic: "قِرَاءَة",
    name: "Qiraa'at",
    note: "Faatihah and another Surah or aayaat",
  },
  {
    arabic: "تَسْبِيح",
    name: "Tas-beeh of ruku'",
  },
  {
    arabic: "تَسْمِيع",
    name: "Tas-mee'a of ruku'",
  },
  {
    arabic: "تَحْمِيد",
    name: "Tahmeed of ruku'",
  },
  {
    arabic: "تَسْبِيح سَجْدَة",
    name: "Tasbeeh of sajdah",
  },
  {
    arabic: "تَشَهُّد",
    name: "Tashah-hud",
  },
  {
    arabic: "دُرُود",
    name: "Darood",
  },
  {
    arabic: "دُعَاء",
    name: "Du'a after darood",
  },
  {
    arabic: "سَلَام",
    name: "Salaam",
  },
];

export default AdhaanPage;
