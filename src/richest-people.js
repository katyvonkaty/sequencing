import plank from "./assets/images/plank.png";
import downward from "./assets/images/downward.png";
import caturanga from "./assets/images/caturanga.png";
import utanasana from "./assets/images/utanasana.png";
import bhjungasana from "./assets/images/bhjungasana.png";
import lowlunge from "./assets/images/lowlunge.png";
import balasana from "./assets/images/balasana.png";
import cobra from "./assets/images/cobra.png";
import warrior2 from "./assets/images/warrior2.png";
import triangle from "./assets/images/triangle.png";
import tree from "./assets/images/tree.png";
import extended from "./assets/images/extended.png";
import warrior1 from "./assets/images/warrior1.png";
import warrior3 from "./assets/images/warrior3.png";
import tadasana from "./assets/images/tadasana.png";
import halfmoon from "./assets/images/halfmoon.png";
import parasita from "./assets/images/parasita.png";



const richestPeople = [
  {
    pose: "plank",
    imgUrl: `${plank}`,
    type: "puttering",
    english: "plank",
    cues: "Engage your core, Position both shoulders over wrists, Firm up arms and legs, Reach back through the heels and all your toes",
  },
  {
    pose: "utanasana",
    imgUrl: `${utanasana}`,
    type: "puttering",
    english: "Intense Forward Fold",
    cues:"Stack your bones vertically, Hinge at the hips to fold forward, Extend spine from tail to crown"
  },
  {
    pose: "lowlunge",
    imgUrl: `${lowlunge}`,
    type: "puttering",
    english: "low lunge",
    cues:"Stack your knee over the ankle, Arms stacked under your shoulders, Lengthen your torso forward away from your crown"
  },
  {
    pose: "balasana",
    imgUrl: `${balasana}`,
    type: "puttering",
    english: "childs pose",
    cues:"Bring your knees as wide as the yoga mat,Try walking your hands to one side, Draw the hips down to the heels "
  },
  { pose: "caturanga",
  imgUrl: `${caturanga}`,
  type: "puttering",
  english: "caturanga",
  cues:"Keep the chest expanded and upper back broad, Draw your low front ribs up towards your back body"
},
  { pose: "Bhujangasana",
  imgUrl: `${cobra}`,
  type: "puttering",
  english: "cobra",
  cues:"Use your arms to lift your chest, Widen your collarbones, Heavy your legs and hips to the floor"
 },
  {
    pose: "downward Dog",
    imgUrl: `${downward}`,
    type: "puttering",
    english: "downward dog",
    cues:"Press firmly into the finger pads and palms, Hug your lower ribs in, Press your upper thighs back towards the sky, Let your hands and feet serve as your foundation"

  },

  {
    pose: "Virabhadrasana 2",
    imgUrl: `${warrior2}`,
    type: "opening standing",
    english: "warrior 2",
    cues:"Fully extend the arms to help open the chest, Keep your tailbone heavy to the floor"
  },
  {
    pose: "Utthita Trikonasana",
    imgUrl: `${triangle}`,
    type: "opening standing",
    english: "triangle",
    cues:
      "Twist from the navel, Lengthen the crown of your head towards the front of the room, Keep the lower ribs connected to the body",
  },
  {
    pose: "Utthita Parsvakonasana",
    imgUrl: `${extended}`,
    type: "opening standing",
    english: "extended side angle",
    cues:
      "Side elongates over the side of your thigh,Pull your outer hip underneath you, Twist from the navel",
  },
  {
    pose: "Ardha Chandrasana",
    imgUrl: `${halfmoon}`,
    type: "opening standing",
    english: "Half Moon Pose",
    cues:'Open the pelvis and stack the top hip over the bottom hip, Press firmly into the back heel'
  },
  {
    pose: "Vrkasasana",
    imgUrl: `${tree}`,
    type: "opening standing",
    english: "Tree",
    cues: "Keep the hips level, Tilt the pelvis towards up towards your face, Press between the foot and thigh",
  },
  {
    pose: "Tadasana",
    imgUrl: `${tadasana}`,
    type: "Neutral Standing Pose",
    english: "Mountain Pose",
    cues:
      "Offers a state of balance throughout body and mind, Hug your outer legs in and press your inner legs out, Elongate your arms down by your side",
  },
  {
    pose: "Warrior 1",
    imgUrl: `${warrior1}`,
    type: "Neutral Standing Pose",
    english: "Virabhadrasana 3",
    cues:'Fully expand your chest, Lift and open at the upper back'
  },
  {
    pose: "Warrior3",
    imgUrl: `${warrior3}`,
    type: "Neutral Standing Pose",
    english: "Virabhadrasana 3",
    cues:"Draw your outer hips in for support, Press firmly through the lifted legs heel, Engage core and butocks to keep hips level"
  },
  {
    pose: "Utthita Hasta Padangustasana",
    imgUrl: `${extended}`,
    type: "Neutral Standing Pose",
    english: "Extended Hand to Foot Pose",
    cues: "Keep the trunk tall and lifted, Keep the standing leg straight, Keep the hips level",
  },
  {
    pose: "Prasarita",
    imgUrl: `${parasita}`,
    type: "Neutral Standing Pose",
    english:"Wide Leg Forward Fold",
    cues: "Lengthen the body from the hips to the armpits, Engage your thighs and keep your legs straight, Keep your hips over the legs and feet",
  },
];

export default richestPeople;
