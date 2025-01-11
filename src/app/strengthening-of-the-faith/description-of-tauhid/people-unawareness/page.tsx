import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        People's unawareness and ignorance:
      </h2>
      <p className="text-lg leading-relaxed pb-5">
        Polytheism is generally widespread among the people and the concept of
        Monotheism is in scarcity. Many people who claim to be the bearers of
        Faith do not understand the meanings of
        <span className="italic text-blue-600">Tauhid</span> (Monotheism) and
        <span className="italic text-blue-600">Shirk</span> (polytheism).
        Apparently they are Muslims, but they are unconsciously involved in the
        acts of
        <span className="italic text-blue-600">Shirk</span>. Therefore, first we
        should try to understand the meanings of
        <span className="italic text-blue-600">Tauhid</span> (Monotheism) and
        <span className="italic text-blue-600">Shirk</span> (polytheism) so that
        we may know about their advantages and disadvantages as directed by
        Qur'an and
        <span className="italic text-blue-600">Sunnah</span>.
      </p>
      <PlantUMLDiagram
        code={`
@startmindmap

skinparam backgroundColor white

<style>
mindmapDiagram {
  node {
    BackgroundColor #ACE1AF
    FontColor black
    FontSize 14
  }
  :depth(1) {
    BackgroundColor #FFB6C1
  }
  :depth(2) {
    BackgroundColor #87CEEB
  }
  :depth(3) {
    BackgroundColor #DDA0DD
  }
}
</style>

* Understanding Faith
** Current State
*** Widespread Polytheism
*** Limited Monotheism
*** Muslims' Misconceptions
** Core Knowledge
*** Tauhid Meaning
**** Monotheism
**** Divine Unity
*** Shirk Understanding 
**** Polytheism
**** Deviations
** Guidance Sources
*** Quran
*** Sunnah
** Learning Goals
*** Comprehend Benefits
*** Recognize Harms
*** Practice Correctly

@endmindmap`}
      />
    </div>
  );
};

export default page;
