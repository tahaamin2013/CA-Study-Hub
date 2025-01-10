import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-2xl font-bold text-center mb-8">
        VOLUME 1 / LESSON NO: 7 - ABOUT THE HOLY QUR'AN
      </h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 1: What is the Holy Qur'an?
          </h2>
          <p className="mt-2">
            A. The Glorious Qur'an is the word of Allah (Kalaam Allah) which
            Allah has gifted to His Beloved Prophet Hazrat Mohammed (may Allah's
            choicest blessings & peace be upon him). To believe in what it
            contains is a part and parcel of our faith.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 2: How do you know that the Holy Qur'an is the Speech of Allah?
          </h2>
          <p className="mt-2">
            A. The Holy Qur'an is itself a convincing proof of it being the
            Speech of Allah. It declares and challenges infidels and
            disbelievers that "if you are in some doubt about what we have sent
            to Our chosen bondman, then bring one chapter like it". All the
            enemies of Islam - particularly the eloquent poets of Arabia - put
            their heads together and strove hard to produce something like it
            but they failed miserably; they could not bring forth a single
            chapter, not even a single verse like it. Thus, the Holy Qur'an is
            an open and everlasting miracle and a challenge to infidels and
            disbelievers till the end of time.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 3: What is the distinction of the Qur'an?
          </h2>
          <p className="mt-2">
            A. The ever-living miracle of the Glorious Qur'an is that the
            believers & even their children can commit the entire Qur'an to
            their memory. Contrary to this, other revealed books could not be
            memorized by the followers of the books except the Prophets to whom
            the said books were revealed.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 4: In how many days was the Holy Qur'an sent down?
          </h2>
          <p className="mt-2">
            A. The Holy Qur'an was sent down in 23 years. Its verses were sent
            down either singly or in batches as the need arose.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 5: How much reward does a believer get for reciting the Glorious
            Qur'an?
          </h2>
          <p className="mt-2">
            A. Our kind master Hazrat Mohammed Mustafa (may Allah's choicest
            blessings & peace be upon him) said, “He who recites a letter of the
            Qur'an gets one goodness which is equal to ten good deeds” and
            stressed "I do not say that "Alif-Laaam-Meeem" is one letter but
            ‘Alif' is a letter, ‘Laam' is another letter and ‘Meem' is another
            letter."
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 6: What does Islam say about a believer who does not learn the
            Holy Qur'an?
          </h2>
          <p className="mt-2">
            A. The Holy Prophet has said "the chest (of a believer) which has
            nothing of the Qur'an in it is like a deserted house".
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 7: What are the basic rules of reciting the Holy Qur'an?
          </h2>
          <p className="mt-2">
            A. The believer should in the state of ablution (Wudu), and sit at a
            clean place preferably in mosque facing the Qibla (Holy Ka'bah)
            placing the Holy Qur'an before himself, on a raised surface. He
            should begin reciting the Glorious Qur'an preceded by "A'oozu
            bil-Laahi Minash Shaietaa-nir Rajeem" (I seek refuge with Allah from
            the Devil, the accursed) and "Bismil-Laahir Rahmaa-nir Raheem"
            (Allah, beginning with the name of, the Most Affectionate, the Most
            Merciful) with sincerity and humility. Show no haste but recite
            carefully and with calmness. Mind it! The mouth should be free from
            every kind of smell like onion, garlic etc and other hasty comments
            or invalid talks...
          </p>
          <p className="mt-2">
            It is sinful to touch the Holy Qur'an without ablution. Listeners
            should be attentive and respectful to the recitation.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 8: How should we dispose of an old worn-out & illegible copy of
            the Qur'an?
          </h2>
          <p className="mt-2">
            A. A copy of the Holy Qur'an which is worn out and is no more
            legible, should be buried, wrapped up in a piece of clean cloth, at
            such a place that is not trodden by human beings and animals. It is
            better to bury it in a grave-like ditch so as to save it from the
            earth.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 9: Are copies of the Holy Qur'an with correct text available?
          </h2>
          <p className="mt-2">
            A. Yes, the copies of the Holy Qur'an with correct text - without
            the slightest difference - are available everywhere. It is safe from
            being changed or corrupted as Allah Almighty is Himself its
            Protector.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            Q 10: What is the divine wisdom in the revelation of the Holy
            Qur'an?
          </h2>
          <p className="mt-2">
            A. Allah Almighty has sent down the Holy Qur'an to guide His
            servants to the right path so that they may know Allah and His
            Apostle, follow their commands and abstain from evils.
          </p>
        </div>
      </div>
      <PlantUMLDiagram
        code={`
@startmindmap
<style>
mindmapDiagram {
    .green {
        BackgroundColor lightgreen
    }
    .blue {
        BackgroundColor lightblue
    }
    .orange {
        BackgroundColor #FFA07A
    }
    .purple {
        BackgroundColor #DDA0DD
    }
}
</style>

* THE HOLY QUR'AN
** Nature and Authenticity <<green>>
*** Word of Allah (Kalaam Allah)
*** Given to Prophet Mohammed (PBUH)
*** Everlasting miracle and challenge
*** Cannot be replicated by anyone

** Unique Distinctions <<blue>>
*** Can be memorized by believers
*** Memorization possible even by children
*** Other religious books could not be memorized except by their prophets
*** Preserved perfectly without changes

** Revelation Details <<orange>>
*** Revealed over 23 years
*** Revealed in parts as needed
*** Single verses or batches
*** Protected by Allah from corruption

** Rules and Etiquette <<purple>>
*** Must have ablution (Wudu)
*** Sit facing Qibla
*** Begin with A'oozu and Bismillah
*** Recite with sincerity
*** Maintain cleanliness
*** Place on raised surface
*** Cannot touch without ablution

left side

** Rewards and Importance <<green>>
*** One letter equals ten good deeds
*** Essential for believers
*** Chest without Qur'an like deserted house

** Practical Aspects <<blue>>
*** Available everywhere with correct text
*** Proper disposal by burial
*** Must be wrapped in clean cloth
*** Buried in respectful location

** Divine Purpose <<orange>>
*** Guide servants to right path
*** Know Allah and His Apostle
*** Follow divine commands
*** Abstain from evils

@endmindmap`}
      />
    </div>
  );
};

export default page;
