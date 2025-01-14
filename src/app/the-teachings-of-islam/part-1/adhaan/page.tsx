import React from "react";

const AdhaanPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Adhaan</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. What is Adhaan (call for prayer)?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A. When the time for salaah comes, a man stands up before the prayer and calls aloud these words:
          </p>
          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-900 font-medium mb-2">[Arabic here]</p>
            <p className="text-gray-900 font-medium">Allaahu akbar – Allah is the Greatest (4 times)</p>
            <p className="text-gray-900 font-medium">Ash-hadu an-laa ilaaha il-lal-laah – I bear witness that there is no god except Allah (2 times)</p>
            <p className="text-gray-900 font-medium">Ash-hadu an-na Muhammadar-rasoolul-laah – I declare that Muhammad is Allah’s Messenger (2 times)</p>
            <p className="text-gray-900 font-medium">Hay-ya ‘alas-salaah – Come for salaah (2 times, turning the head to the right both times)</p>
            <p className="text-gray-900 font-medium">Hay-ya ‘alal-falaah – Come to success (2 times, turning the head to the left both times)</p>
            <p className="text-gray-900 font-medium">Allaahu akbar – Allah is the Greatest (2 times)</p>
            <p className="text-gray-900 font-medium">Laa ilaaha il-lal-laah – There is no god except Allah.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            These words are called adhaan. In the adhaan of Fajr after Hay-ya ‘alal-falaah, say 2 times:
          </p>
          <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500">
            <p className="text-gray-900 font-medium">As-salaatu khairum-minan-naum – Prayer is better than sleep.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. What is iqaamah or takbeer (magnification of the Lord)?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A. When people stand up for salaah, a person repeats the words of adhaan, this is called iqaamah or takbeer. The words of adhaan are repeated exactly the same in iqaamah but, after hay-ya ‘alal-falaah, one says 2 times:
          </p>
          <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500">
            <p className="text-gray-900 font-medium">Qad qaamatis-salaah – The prayer is ready.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. What name is given to the person who recites adhaan or takbeer?</h2>
          <p className="text-gray-700 leading-relaxed">
            A. The person who recites adhaan is called <span className="font-medium">mu-adh-dhin</span> and the one who recites takbeer is called <span className="font-medium">mukab-bir</span>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. When many people assemble and say salaah together, what do we call it?</h2>
          <p className="text-gray-700 leading-relaxed">
            A. Salaah which is offered, not individually, but along with other people is called <span className="font-medium">salaah bil-jamaa’ah</span> (namaaz ba jamaa’at or “prayer in congregation”). The person who leads the jamaa’ah is called the <span className="font-medium">imaam</span>. A person who says salaah behind the imaam is known as a <span className="font-medium">muqtadi</span>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. What is the person called who says salaah alone?</h2>
          <p className="text-gray-700 leading-relaxed">
            A. He is called <span className="font-medium">munfarid</span> (“solitary” or “isolated”).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. What is the house called that is specially built for salaah?</h2>
          <p className="text-gray-700 leading-relaxed">
            A. Such a place is called a <span className="font-medium">masjid</span> (mosque).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. What should one do in a masjid?</h2>
          <p className="text-gray-700 leading-relaxed">
            A. One should offer salaah, read the Holy Qur’aan or wazeefa or sit silently and respectfully. It is very bad to play, jump, make noise or talk of worldly affairs in a masjid.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. What are the benefits of salaah?</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>The body and clothes of a namaazi (musalli or one who prays salaah) are always neat and clean.</li>
            <li>Allah, the Almighty, is pleased with one who says salaah.</li>
            <li>Prophet Muhammad ( ) is pleased with a musalli.</li>
            <li>Allah, the Almighty, favours those who pray salaah.</li>
            <li>Good men hold a musalli in high esteem.</li>
            <li>A musalli is saved from many evil deeds.</li>
            <li>Allah, the Almighty, keeps a musalli in peace and comfort after his death.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Q. What are the names of the expressions or phrases said in salaah?</h2>
          <p className="text-gray-700 leading-relaxed">
            A. The names of the expressions said in salaah are:
          </p>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
            <li>Takbeer</li>
            <li>Thana</li>
            <li>Ta-‘aw-wudh</li>
            <li>Tasmiyah</li>
            <li>Qiraa’at: Faatihah and another Surah or aayaat</li>
            <li>Tas-beeh of ruku’</li>
            <li>Tas-mee’a of ruku’</li>
            <li>Tahmeed of ruku’</li>
            <li>Tasbeeh of sajdah</li>
            <li>Tashah-hud</li>
            <li>Darood</li>
            <li>Du’a after darood</li>
            <li>Salaam</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdhaanPage;