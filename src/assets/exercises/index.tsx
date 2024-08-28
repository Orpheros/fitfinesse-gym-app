// 0:"back"
// 1:"cardio"
// 2:"chest"
// 3:"lower arms"
// 4:"lower legs"
// 5:"neck"
// 6:"shoulders"
// 7:"upper arms"
// 8:"upper legs"
// 9:"waist"

import { options } from "../../environment";

//target list
// 0:"abductors"
// 1:"abs"
// 2:"adductors"
// 3:"biceps"
// 4:"calves"
// 5:"cardiovascular system"
// 6:"delts"
// 7:"forearms"
// 8:"glutes"
// 9:"hamstrings"
// 10:"lats"
// 11:"levator scapulae"
// 12:"pectorals"
// 13:"quads"
// 14:"serratus anterior"
// 15:"spine"
// 16:"traps"
// 17:"triceps"
// 18:"upper back"

export const exercises: any = {
  back: [
    {
      bodyPart: "back",
      equipment: "cable",
      gifUrl: "https://v2.exercisedb.io/image/fkTQOyPr4d4jcq",
      id: "0007",
      name: "alternate lateral pulldown",
      target: "lats",
      secondaryMuscles: ["biceps", "rhomboids"],
      instructions: [
        "Sit on the cable machine with your back straight and feet flat on the ground.",
        "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
        "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/Ac32YgNKa4x-Fb",
      id: "3293",
      name: "archer pull up",
      target: "lats",
      secondaryMuscles: ["biceps", "forearms"],
      instructions: [
        "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
        "Engage your core and pull your shoulder blades down and back.",
        "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
        "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
        "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
        "Alternate sides with each repetition.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/WdZSQZtPWqYNGl",
      id: "0015",
      name: "assisted parallel close grip pull-up",
      target: "lats",
      secondaryMuscles: ["biceps", "forearms"],
      instructions: [
        "Adjust the machine to your desired weight and height.",
        "Place your hands on the parallel bars with a close grip, palms facing each other.",
        "Hang from the bars with your arms fully extended and your feet off the ground.",
        "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
        "Continue pulling until your chin is above the bars.",
        "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/ZqdvkCfXWSkg9z",
      id: "0017",
      name: "assisted pull-up",
      target: "lats",
      secondaryMuscles: ["biceps", "forearms"],
      instructions: [
        "Adjust the machine to your desired weight and height settings.",
        "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Hang with your arms fully extended and your feet off the ground.",
        "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
        "Continue pulling until your chin is above the handles.",
        "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/77AgYNUaJ8kZxi",
      id: "1431",
      name: "assisted standing chin-up",
      target: "lats",
      secondaryMuscles: ["biceps", "forearms"],
      instructions: [
        "Adjust the machine to your desired assistance level.",
        "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
        "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
        "Continue pulling until your chin is above the bar.",
        "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/Lg7M-Bu2ddWN22",
      id: "1432",
      name: "assisted standing pull-up",
      target: "lats",
      secondaryMuscles: ["biceps", "forearms"],
      instructions: [
        "Adjust the machine to your desired weight and height settings.",
        "Stand facing the machine with your feet shoulder-width apart.",
        "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Engage your lats and biceps, and pull yourself up towards the handles.",
        "Pause for a moment at the top, squeezing your back muscles.",
        "Slowly lower yourself back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "stability ball",
      gifUrl: "https://v2.exercisedb.io/image/hu4MmbUXrNjV6J",
      id: "1314",
      name: "back extension on exercise ball",
      target: "spine",
      secondaryMuscles: ["glutes", "hamstrings"],
      instructions: [
        "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.",
        "Position your hands behind your head or crossed over your chest.",
        "Engage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.",
        "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/tsrDAdTpdsWrMo",
      id: "3297",
      name: "back lever",
      target: "upper back",
      secondaryMuscles: ["biceps", "forearms", "core"],
      instructions: [
        "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.",
        "Engage your core and pull your shoulder blades down and back.",
        "Bend your knees and tuck them towards your chest.",
        "Slowly lift your legs up, keeping them straight, until your body is parallel to the ground.",
        "Hold this position for a few seconds, then slowly lower your legs back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/gXAPhOYNLxDPXQ",
      id: "1405",
      name: "back pec stretch",
      target: "lats",
      secondaryMuscles: ["shoulders", "chest"],
      instructions: [
        "Stand tall with your feet shoulder-width apart.",
        "Extend your arms straight out in front of you, parallel to the ground.",
        "Cross your arms in front of your body, with your right arm over your left arm.",
        "Interlock your fingers and rotate your palms away from your body.",
        "Slowly raise your arms up and away from your body, feeling a stretch in your back and chest.",
        "Hold the stretch for 15-30 seconds, then release.",
        "Repeat on the opposite side.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/yNmyIfoGotXRbi",
      id: "0970",
      name: "band assisted pull-up",
      target: "lats",
      secondaryMuscles: ["biceps", "forearms"],
      instructions: [
        "Attach the band to a pull-up bar or sturdy anchor point.",
        "Step onto the band and grip the bar with your palms facing away from you, hands slightly wider than shoulder-width apart.",
        "Hang with your arms fully extended, keeping your core engaged and your shoulders down and back.",
        "Pull your body up towards the bar by squeezing your shoulder blades together and driving your elbows down towards your hips.",
        "Continue pulling until your chin is above the bar, then slowly lower yourself back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
  ],
  chest: [
    {
      bodyPart: "chest",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/ClTa6po4aolSVO",
      id: "3294",
      name: "archer push up",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders", "core"],
      instructions: [
        "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
        "Extend one arm straight out to the side, parallel to the ground.",
        "Lower your body by bending your elbows, keeping your back straight and core engaged.",
        "Push back up to the starting position.",
        "Repeat on the other side, extending the opposite arm out to the side.",
        "Continue alternating sides for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/4wKs99uYrNMdXq",
      id: "0009",
      name: "assisted chest dip (kneeling)",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders"],
      instructions: [
        "Adjust the machine to your desired height and secure your knees on the pad.",
        "Grasp the handles with your palms facing down and your arms fully extended.",
        "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
        "Pause for a moment, then push yourself back up to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "assisted",
      gifUrl: "https://v2.exercisedb.io/image/M9ifaExwkRtAQu",
      id: "1716",
      name: "assisted seated pectoralis major stretch with stability ball",
      target: "pectorals",
      secondaryMuscles: ["shoulders", "triceps"],
      instructions: [
        "Sit on a stability ball with your feet flat on the ground and your back straight.",
        "Hold a stability ball with both hands and extend your arms straight out in front of you.",
        "Slowly lower the stability ball towards your chest, feeling a stretch in your pectoral muscles.",
        "Hold the stretch for a few seconds, then slowly return to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/r1ZRLUSzV1Sq-r",
      id: "2364",
      name: "assisted wide-grip chest dip (kneeling)",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders"],
      instructions: [
        "Adjust the machine to your desired height and secure your knees on the pad.",
        "Grasp the handles with a wide grip and keep your elbows slightly bent.",
        "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
        "Push yourself back up to the starting position by extending your arms.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/Fi-bQSYgqApAoc",
      id: "1254",
      name: "band bench press",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders"],
      instructions: [
        "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
        "Grasp the band handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Extend your arms fully, pushing the bands away from your chest.",
        "Slowly lower the bands back down to your chest, keeping your elbows at a 90-degree angle.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/CsKQIZT-kQxh-K",
      id: "0989",
      name: "band one arm twisting chest press",
      target: "pectorals",
      secondaryMuscles: ["shoulders", "triceps"],
      instructions: [
        "Attach the band to a sturdy anchor point at chest height.",
        "Stand with your side facing the anchor point and grab the band with one hand.",
        "Step away from the anchor point to create tension in the band.",
        "Position your feet shoulder-width apart and slightly bend your knees.",
        "Bring your hand holding the band across your body, towards the opposite shoulder.",
        "While maintaining tension in the band, push your hand forward and away from your body, extending your arm.",
        "Slowly return to the starting position and repeat for the desired number of repetitions.",
        "Switch sides and repeat the exercise with the other hand.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/IwCYhOJSUYfh-3",
      id: "0025",
      name: "barbell bench press",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders"],
      instructions: [
        "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
        "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
        "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
        "Lower the barbell slowly towards your chest, keeping your elbows tucked in.",
        "Pause for a moment when the barbell touches your chest.",
        "Push the barbell back up to the starting position by extending your arms.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/LzsrVHWo4xGINL",
      id: "0033",
      name: "barbell decline bench press",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders"],
      instructions: [
        "Lie on a decline bench with your feet secured and your head lower than your hips.",
        "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
        "Unrack the barbell and lower it slowly towards your chest, keeping your elbows tucked in.",
        "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/O8Oc9YTxpMV2uh",
      id: "1255",
      name: "barbell decline pullover",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders"],
      instructions: [
        "Lie down on a decline bench with your head lower than your hips and your feet secured.",
        "Hold the barbell with a pronated grip (palms facing away from you) and your hands slightly wider than shoulder-width apart.",
        "Extend your arms above your chest, keeping a slight bend in your elbows.",
        "Lower the barbell in an arc motion behind your head, feeling a stretch in your chest and shoulders.",
        "Pause for a moment, then return the barbell to the starting position by reversing the motion.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/wX4bRrrcmw-Z2T",
      id: "0036",
      name: "barbell decline wide-grip press",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders"],
      instructions: [
        "Lie on a decline bench with your feet secured and your head lower than your hips.",
        "Grasp the barbell with a wide grip, slightly wider than shoulder-width apart.",
        "Lower the barbell to your chest, keeping your elbows out to the sides.",
        "Push the barbell back up to the starting position, fully extending your arms.",
        "Repeat for the desired number of repetitions.",
      ],
    },
  ],
  leg: [
    {
      bodyPart: "lower legs",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/NznUUKCXbDBLYg",
      id: "1368",
      name: "ankle circles",
      target: "calves",
      secondaryMuscles: ["ankle stabilizers"],
      instructions: [
        "Sit on the ground with your legs extended in front of you.",
        "Lift one leg off the ground and rotate your ankle in a circular motion.",
        "Perform the desired number of circles in one direction, then switch to the other direction.",
        "Repeat with the other leg.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "assisted",
      gifUrl: "https://v2.exercisedb.io/image/-WpmWq-nzlk07E",
      id: "1708",
      name: "assisted lying calves stretch",
      target: "calves",
      secondaryMuscles: ["hamstrings"],
      instructions: [
        "Lie on your back with your legs extended.",
        "Bend one knee and place your foot flat on the ground.",
        "Using your hands or a towel, gently pull your toes towards your body, feeling a stretch in your calf.",
        "Hold the stretch for 20-30 seconds.",
        "Release the stretch and repeat on the other leg.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/ayFY9TCptmwq1X",
      id: "0999",
      name: "band single leg calf raise",
      target: "calves",
      secondaryMuscles: ["ankles", "feet"],
      instructions: [
        "Stand with your feet hip-width apart and place the band around the ball of your left foot.",
        "Hold onto a stable object for balance if needed.",
        "Slowly raise your left heel off the ground, lifting your body weight onto the ball of your foot.",
        "Pause for a moment at the top, then slowly lower your left heel back down to the starting position.",
        "Repeat for the desired number of repetitions, then switch to the right leg.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/2wW38D4qNDknqw",
      id: "1000",
      name: "band single leg reverse calf raise",
      target: "calves",
      secondaryMuscles: ["hamstrings", "glutes"],
      instructions: [
        "Stand with your feet hip-width apart and place the band around the ball of your foot.",
        "Hold onto a stable object for balance.",
        "Slowly raise your heel off the ground, lifting your body weight onto the ball of your foot.",
        "Pause for a moment at the top, then slowly lower your heel back down to the starting position.",
        "Repeat for the desired number of repetitions, then switch to the other leg.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/yT3AU-i2QM1tBR",
      id: "1369",
      name: "band two legs calf raise - (band under both legs) v. 2",
      target: "calves",
      secondaryMuscles: ["ankles", "feet"],
      instructions: [
        "Stand with your feet shoulder-width apart and place a resistance band under both feet.",
        "Hold the ends of the band with your hands for stability.",
        "Raise your heels off the ground as high as possible, using your calves.",
        "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/kdGk6fF3kNmBna",
      id: "1370",
      name: "barbell floor calf raise",
      target: "calves",
      secondaryMuscles: ["hamstrings"],
      instructions: [
        "Place a barbell on the floor in front of you.",
        "Stand with the balls of your feet on the edge of the barbell, with your heels hanging off.",
        "Hold onto a stable object for balance if needed.",
        "Raise your heels as high as possible, using your calves to lift your body.",
        "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/g-0jR8i-g1ULOp",
      id: "0088",
      name: "barbell seated calf raise",
      target: "calves",
      secondaryMuscles: ["hamstrings", "quadriceps"],
      instructions: [
        "Sit on a bench with your feet flat on the floor and a barbell resting on your thighs.",
        "Place the balls of your feet on a raised platform, such as a block or step.",
        "Position the barbell across your thighs and hold it securely with your hands.",
        "Keeping your back straight and your core engaged, lift your heels off the ground by extending your ankles.",
        "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/M1Xbc9-zfMP5BE",
      id: "1371",
      name: "barbell seated calf raise",
      target: "calves",
      secondaryMuscles: ["hamstrings"],
      instructions: [
        "Sit on a bench with your feet flat on the floor and a barbell resting on your thighs.",
        "Place the balls of your feet on a raised platform, such as a block or step.",
        "Lower your heels as far as possible, feeling a stretch in your calves.",
        "Raise your heels as high as possible, contracting your calves.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/Bk9Fc6WA33p4HH",
      id: "1372",
      name: "barbell standing calf raise",
      target: "calves",
      secondaryMuscles: ["hamstrings", "glutes"],
      instructions: [
        "Stand with your feet shoulder-width apart and place a barbell across your upper back.",
        "Raise your heels off the ground as high as possible, using only your toes.",
        "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/Ov7Q7UK8bV5-Sm",
      id: "0108",
      name: "barbell standing leg calf raise",
      target: "calves",
      secondaryMuscles: ["hamstrings", "glutes"],
      instructions: [
        "Stand with your feet shoulder-width apart and place a barbell across your upper back.",
        "Raise your heels off the ground as high as possible, using your calves.",
        "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
  ],
  shoulder: [
    {
      bodyPart: "shoulders",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/XgDQrZXv8fmKYn",
      id: "0977",
      name: "band front lateral raise",
      target: "delts",
      secondaryMuscles: ["traps", "upper back"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing down.",
        "Keep your arms straight and lift the band up in front of you until your arms are parallel to the ground.",
        "Pause for a moment at the top, then slowly lower the band back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/brOEu4hzC4kCB6",
      id: "0978",
      name: "band front raise",
      target: "delts",
      secondaryMuscles: ["triceps", "upper back"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing down.",
        "Keep your arms straight and slowly raise them forward until they are parallel to the ground.",
        "Pause for a moment at the top, then slowly lower your arms back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/fyp8qgyjOfawA7",
      id: "0993",
      name: "band reverse fly",
      target: "delts",
      secondaryMuscles: ["upper back", "trapezius"],
      instructions: [
        "Attach the band to a stationary object at chest height.",
        "Stand with your feet shoulder-width apart and hold the band with both hands in front of you.",
        "Keep your arms straight and lift them out to the sides until they are parallel to the ground.",
        "Squeeze your shoulder blades together at the top of the movement.",
        "Slowly lower your arms back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/ur6BnQKIsVlrZG",
      id: "0997",
      name: "band shoulder press",
      target: "delts",
      secondaryMuscles: ["triceps", "upper back"],
      instructions: [
        "Stand with your feet shoulder-width apart and place the band under your feet.",
        "Hold the band with your palms facing forward and raise your hands to shoulder height, elbows bent.",
        "Press the band overhead, fully extending your arms.",
        "Pause for a moment at the top, then slowly lower the band back to shoulder height.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/oIcsszeKVeLb17",
      id: "1022",
      name: "band standing rear delt row",
      target: "delts",
      secondaryMuscles: ["trapezius", "rhomboids", "biceps"],
      instructions: [
        "Stand with your feet shoulder-width apart and place the band under your feet.",
        "Hold the band handles with your palms facing each other and your arms extended in front of you.",
        "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
        "Pull the band towards your chest, squeezing your shoulder blades together.",
        "Pause for a moment at the top, then slowly release the tension and return to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/MGh2CUIsTxFnzU",
      id: "1012",
      name: "band twisting overhead press",
      target: "delts",
      secondaryMuscles: ["triceps", "upper back"],
      instructions: [
        "Stand with your feet shoulder-width apart and place the band under your feet.",
        "Hold the band handles at shoulder height with your palms facing forward.",
        "Engage your core and press the band overhead, fully extending your arms.",
        "As you press, twist your torso to one side, keeping your hips stable.",
        "Pause for a moment at the top, then return to the starting position.",
        "Repeat the press and twist on the opposite side.",
        "Continue alternating sides for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/1Nc1k93otyF5lh",
      id: "1017",
      name: "band y-raise",
      target: "delts",
      secondaryMuscles: ["traps", "rhomboids"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing inwards.",
        "Keep your arms straight and lift them up and out to the sides, forming a 'Y' shape with your body.",
        "Squeeze your shoulder blades together at the top of the movement.",
        "Slowly lower your arms back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/mnPEP1OGDvV0VC",
      id: "0041",
      name: "barbell front raise",
      target: "delts",
      secondaryMuscles: ["biceps", "triceps"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold a barbell in front of your thighs with an overhand grip.",
        "Keep your arms straight and lift the barbell forward and upward until it reaches shoulder level.",
        "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/ulGJ12N7d6AJYm",
      id: "0067",
      name: "barbell one arm snatch",
      target: "delts",
      secondaryMuscles: ["traps", "forearms", "core"],
      instructions: [
        "Stand with your feet shoulder-width apart, toes pointing slightly outwards.",
        "Hold the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
        "Bend your knees and lower your hips into a squat position, keeping your back straight and chest up.",
        "Explosively extend your hips, knees, and ankles, driving the barbell upwards.",
        "As the barbell reaches chest level, pull it upwards with your arm, keeping it close to your body.",
        "Rotate your elbow under the barbell and extend your arm fully overhead, locking out your elbow.",
        "Lower the barbell back down to the starting position in a controlled manner.",
        "Repeat for the desired number of repetitions, then switch arms.",
      ],
    },
    {
      bodyPart: "shoulders",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/whl9S3xmRENji1",
      id: "0075",
      name: "barbell rear delt raise",
      target: "delts",
      secondaryMuscles: ["traps", "rhomboids"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold a barbell with an overhand grip, palms facing down.",
        "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
        "Raise the barbell out to the sides, keeping your arms straight, until they are parallel to the ground.",
        "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
  ],
  upper_arm: [
    {
      bodyPart: "upper arms",
      equipment: "assisted",
      gifUrl: "https://v2.exercisedb.io/image/WNWRKnjmoeaxlF",
      id: "0018",
      name: "assisted standing triceps extension (with towel)",
      target: "triceps",
      secondaryMuscles: ["shoulders"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold a towel with both hands behind your head.",
        "Keep your elbows close to your ears and your upper arms stationary.",
        "Slowly extend your forearms upward, squeezing your triceps at the top.",
        "Pause for a moment, then slowly lower the towel back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/4woTm0vvnNNO8o",
      id: "0019",
      name: "assisted triceps dip (kneeling)",
      target: "triceps",
      secondaryMuscles: ["chest", "shoulders"],
      instructions: [
        "Adjust the machine to your desired weight and height.",
        "Kneel down on the pad facing the machine, with your hands gripping the handles.",
        "Lower your body by bending your elbows, keeping your back straight and close to the machine.",
        "Pause for a moment at the bottom, then push yourself back up to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/NNCA5Dz60d7PYa",
      id: "0968",
      name: "band alternating biceps curl",
      target: "biceps",
      secondaryMuscles: ["forearms"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold the band with an underhand grip, palms facing up.",
        "Keep your elbows close to your sides and slowly curl one arm up towards your shoulder, squeezing your biceps at the top.",
        "Lower the arm back down to the starting position and repeat with the other arm.",
        "Continue alternating arms for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/byZEm1U0aCe12A",
      id: "0975",
      name: "band close-grip push-up",
      target: "triceps",
      secondaryMuscles: ["chest", "shoulders"],
      instructions: [
        "Place a band around your upper arms, just above the elbows.",
        "Assume a push-up position with your hands directly under your shoulders and your body in a straight line from head to heels.",
        "Bend your elbows and lower your chest towards the ground, keeping your elbows close to your sides.",
        "Push through your palms to extend your arms and return to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/MC6FHWZMblbEbS",
      id: "0976",
      name: "band concentration curl",
      target: "biceps",
      secondaryMuscles: ["forearms"],
      instructions: [
        "Sit on a bench or chair with your legs spread apart and your feet flat on the ground.",
        "Hold one end of the band in your hand and step on the other end with your foot on the same side.",
        "Lean forward slightly and rest your elbow on the inside of your thigh, just above the knee.",
        "With your palm facing up, slowly curl your hand towards your shoulder, keeping your upper arm stationary.",
        "Pause for a moment at the top, then slowly lower your hand back down to the starting position.",
        "Repeat for the desired number of repetitions, then switch sides.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/vlDjOOFa3Mrkr3",
      id: "0986",
      name: "band one arm overhead biceps curl",
      target: "biceps",
      secondaryMuscles: ["forearms", "shoulders"],
      instructions: [
        "Stand with your feet shoulder-width apart and place one end of the band under your foot.",
        "Hold the other end of the band with your arm fully extended overhead, palm facing forward.",
        "Keeping your upper arm stationary, curl your forearm towards your shoulder, squeezing your biceps.",
        "Pause for a moment at the top, then slowly lower your forearm back to the starting position.",
        "Repeat for the desired number of repetitions, then switch arms.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/ekJ0kDi4KmTk0G",
      id: "0998",
      name: "band side triceps extension",
      target: "triceps",
      secondaryMuscles: ["shoulders"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold the band with both hands, palms facing down.",
        "Extend your arms straight out to the sides, keeping them parallel to the ground.",
        "Slowly bend your elbows and bring your hands towards your shoulders, keeping your upper arms still.",
        "Pause for a moment, then slowly extend your arms back out to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/dl7NdWS-79n4Ez",
      id: "0023",
      name: "barbell alternate biceps curl",
      target: "biceps",
      secondaryMuscles: ["forearms"],
      instructions: [
        "Stand up straight with your feet shoulder-width apart and hold a barbell in each hand, palms facing forward.",
        "Keep your upper arms stationary and exhale as you curl the weights while contracting your biceps.",
        "Continue to raise the barbells until your biceps are fully contracted and the barbells are at shoulder level.",
        "Hold the contracted position for a brief pause as you squeeze your biceps.",
        "Inhale as you slowly begin to lower the barbells back to the starting position.",
        "Repeat for the desired number of repetitions, alternating arms.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/QVACox51gQKK0O",
      id: "2407",
      name: "barbell biceps curl (with arm blaster)",
      target: "biceps",
      secondaryMuscles: ["forearms"],
      instructions: [
        "Stand up straight with your feet shoulder-width apart and hold a barbell with an underhand grip, palms facing up.",
        "Place your upper arms against the arm blaster, keeping your elbows close to your torso.",
        "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
        "Continue to raise the barbell until your biceps are fully contracted and the bar is at shoulder level.",
        "Hold the contracted position for a brief pause as you squeeze your biceps.",
        "Inhale and slowly begin to lower the barbell back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "upper arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/AkKroBeC7Ei9HI",
      id: "0030",
      name: "barbell close-grip bench press",
      target: "triceps",
      secondaryMuscles: ["chest", "shoulders"],
      instructions: [
        "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
        "Grasp the barbell with a close grip, slightly narrower than shoulder-width apart.",
        "Unrack the barbell and lower it slowly towards your chest, keeping your elbows close to your body.",
        "Pause for a moment when the barbell touches your chest.",
        "Push the barbell back up to the starting position, fully extending your arms.",
        "Repeat for the desired number of repetitions.",
      ],
    },
  ],
  lower_arm: [
    {
      bodyPart: "lower arms",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/1A1F5kTRPlyS4P",
      id: "0994",
      name: "band reverse wrist curl",
      target: "forearms",
      secondaryMuscles: ["forearms"],
      instructions: [
        "Sit on a bench or chair with your feet flat on the ground.",
        "Hold the band with an overhand grip, palms facing down, and wrap it around your fingers.",
        "Rest your forearms on your thighs, with your wrists hanging off the edge.",
        "Slowly curl your wrists upward, squeezing your forearms.",
        "Pause for a moment at the top, then slowly lower your wrists back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "band",
      gifUrl: "https://v2.exercisedb.io/image/Aq0FlC4ESgvtKZ",
      id: "1016",
      name: "band wrist curl",
      target: "forearms",
      secondaryMuscles: ["biceps", "triceps"],
      instructions: [
        "Sit on a bench or chair with your feet flat on the ground.",
        "Hold the band with both hands, palms facing up, and rest your forearms on your thighs.",
        "Slowly curl your wrists upward, squeezing your forearms.",
        "Pause for a moment at the top, then slowly lower your wrists back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/c0dlCGdHbX4Rn9",
      id: "1411",
      name: "barbell palms down wrist curl over a bench",
      target: "forearms",
      secondaryMuscles: ["biceps", "brachialis"],
      instructions: [
        "Sit on a bench with your feet flat on the ground and your forearms resting on your thighs, palms facing down.",
        "Hold a barbell with an overhand grip, hands shoulder-width apart.",
        "Lower the barbell towards the ground by flexing your wrists, keeping your forearms stationary.",
        "Pause for a moment at the bottom, then slowly raise the barbell back up by extending your wrists.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/GH2qEVZ04IlOLT",
      id: "1412",
      name: "barbell palms up wrist curl over a bench",
      target: "forearms",
      secondaryMuscles: ["biceps", "shoulders"],
      instructions: [
        "Sit on a bench with your feet flat on the ground and hold a barbell with an underhand grip, palms facing up.",
        "Rest your forearms on the bench, allowing your wrists to hang off the edge.",
        "Keeping your forearms stationary, exhale and curl your wrists upwards as far as possible.",
        "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/j47PGaNlpmwUYt",
      id: "0079",
      name: "barbell revers wrist curl v. 2",
      target: "forearms",
      secondaryMuscles: ["biceps", "brachialis"],
      instructions: [
        "Sit on a bench with your feet flat on the ground and your knees bent.",
        "Hold a barbell with an overhand grip, palms facing down, and your hands shoulder-width apart.",
        "Rest your forearms on your thighs, allowing your wrists to hang off the edge.",
        "Keeping your forearms stationary, exhale and curl your wrists upward as far as possible.",
        "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/jO0XMwTZIrED3b",
      id: "0082",
      name: "barbell reverse wrist curl",
      target: "forearms",
      secondaryMuscles: ["biceps", "brachialis"],
      instructions: [
        "Sit on a bench with your feet flat on the ground and hold a barbell with an overhand grip, palms facing down.",
        "Rest your forearms on your thighs, allowing your wrists to hang off the edge.",
        "Slowly curl your wrists upward, bringing the barbell towards your body.",
        "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/8oK1Hp31rXLcfn",
      id: "0104",
      name: "barbell standing back wrist curl",
      target: "forearms",
      secondaryMuscles: ["biceps", "shoulders"],
      instructions: [
        "Stand up straight with your feet shoulder-width apart and hold a barbell with an overhand grip.",
        "Rest the barbell on the back of your hands with your palms facing down and your fingers pointing towards your body.",
        "Keeping your upper arms stationary, exhale and curl your wrists upwards as far as possible.",
        "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/YcthyRmr4mzgxC",
      id: "0126",
      name: "barbell wrist curl",
      target: "forearms",
      secondaryMuscles: ["biceps", "brachialis"],
      instructions: [
        "Sit on a bench with your feet flat on the ground and your forearms resting on your thighs, holding a barbell with an underhand grip.",
        "Allow the barbell to roll down to your fingertips, keeping your wrists straight.",
        "Slowly curl the barbell up towards your forearms by flexing your wrists.",
        "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "barbell",
      gifUrl: "https://v2.exercisedb.io/image/7L-ucheV6xVKRx",
      id: "0125",
      name: "barbell wrist curl v. 2",
      target: "forearms",
      secondaryMuscles: ["biceps", "brachialis"],
      instructions: [
        "Sit on a bench with your feet flat on the ground and your knees bent.",
        "Hold a barbell with an underhand grip, palms facing up, and your hands shoulder-width apart.",
        "Rest your forearms on your thighs, allowing your wrists to hang off the edge.",
        "Slowly curl your wrists upward, bringing the barbell towards your forearms.",
        "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower arms",
      equipment: "cable",
      gifUrl: "https://v2.exercisedb.io/image/ziUtVEnaQaQYL7",
      id: "0210",
      name: "cable reverse wrist curl",
      target: "forearms",
      secondaryMuscles: ["forearms", "wrists"],
      instructions: [
        "Attach a cable to a low pulley and sit on a bench facing the cable machine.",
        "Grasp the cable handle with an overhand grip, palms facing down.",
        "Rest your forearms on your thighs, with your wrists hanging off the edge.",
        "Keeping your forearms stationary, exhale and curl your wrists upward as far as possible.",
        "Pause for a moment at the top, then inhale and slowly lower your wrists back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
  ],
  cardio: [
    {
      bodyPart: "cardio",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/jKUUZ1hT2C9JxP",
      id: "3220",
      name: "astride jumps (male)",
      target: "cardiovascular system",
      secondaryMuscles: ["quadriceps", "hamstrings", "calves"],
      instructions: [
        "Stand with your feet shoulder-width apart.",
        "Bend your knees and lower your body into a squat position.",
        "Jump explosively upwards, extending your legs and arms.",
        "While in the air, spread your legs apart and bring your arms out to the sides.",
        "Land softly with your feet shoulder-width apart, bending your knees to absorb the impact.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/oSUJTufdR-x3pH",
      id: "3672",
      name: "back and forth step",
      target: "cardiovascular system",
      secondaryMuscles: ["quadriceps", "hamstrings", "glutes", "calves"],
      instructions: [
        "Stand with your feet shoulder-width apart.",
        "Step forward with your right foot, bending your knee and lowering your body into a lunge position.",
        "Push off with your right foot and step back to the starting position.",
        "Repeat the movement with your left foot, alternating legs with each step.",
        "Continue stepping back and forth, maintaining a steady pace.",
        "Repeat for the desired duration or number of repetitions.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/OoZRq5YfCDkmkG",
      id: "3360",
      name: "bear crawl",
      target: "cardiovascular system",
      secondaryMuscles: ["core", "shoulders", "triceps"],
      instructions: [
        "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
        "Lift your knees slightly off the ground, keeping your back flat and your core engaged.",
        "Move your right hand and left foot forward simultaneously, followed by your left hand and right foot.",
        "Continue crawling forward, alternating your hand and foot movements.",
        "Maintain a steady pace and keep your core tight throughout the exercise.",
        "Continue for the desired distance or time.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/7bYkagOeq7vA2e",
      id: "1160",
      name: "burpee",
      target: "cardiovascular system",
      secondaryMuscles: [
        "quadriceps",
        "hamstrings",
        "calves",
        "shoulders",
        "chest",
      ],
      instructions: [
        "Start in a standing position with your feet shoulder-width apart.",
        "Lower your body into a squat position by bending your knees and placing your hands on the floor in front of you.",
        "Kick your feet back into a push-up position.",
        "Perform a push-up, keeping your body in a straight line.",
        "Jump your feet back into the squat position.",
        "Jump up explosively, reaching your arms overhead.",
        "Land softly and immediately lower back into a squat position to begin the next repetition.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/mYIabeoxurefxl",
      id: "2331",
      name: "cycle cross trainer",
      target: "cardiovascular system",
      secondaryMuscles: ["quadriceps", "hamstrings", "glutes"],
      instructions: [
        "Adjust the seat height and position yourself on the cycle cross trainer.",
        "Place your feet on the pedals and grip the handlebars.",
        "Start pedaling in a smooth and controlled motion.",
        "Maintain a steady pace and increase the resistance if desired.",
        "Continue pedaling for the desired duration of your cardio workout.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "dumbbell",
      gifUrl: "https://v2.exercisedb.io/image/UapWST1xK2-X2t",
      id: "1201",
      name: "dumbbell burpee",
      target: "cardiovascular system",
      secondaryMuscles: [
        "quadriceps",
        "hamstrings",
        "calves",
        "shoulders",
        "triceps",
        "core",
      ],
      instructions: [
        "Start in a standing position with your feet shoulder-width apart and a dumbbell in each hand.",
        "Lower your body into a squat position, placing the dumbbells on the ground in front of you.",
        "Kick your feet back into a push-up position, keeping your body in a straight line.",
        "Perform a push-up, bending your elbows and lowering your chest towards the ground.",
        "Jump your feet back towards your hands, landing in a squat position.",
        "Stand up explosively, lifting the dumbbells off the ground and bringing them to your shoulders.",
        "Press the dumbbells overhead, fully extending your arms.",
        "Lower the dumbbells back to your shoulders and repeat the entire sequence for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/qZclxG8HYOdzii",
      id: "3221",
      name: "half knee bends (male)",
      target: "cardiovascular system",
      secondaryMuscles: ["quadriceps", "hamstrings", "glutes"],
      instructions: [
        "Stand with your feet shoulder-width apart.",
        "Bend your knees and lower your body down as if you were sitting back into a chair.",
        "Keep your chest up and your weight in your heels.",
        "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/uYa5aqOmFXoJ9K",
      id: "3636",
      name: "high knee against wall",
      target: "cardiovascular system",
      secondaryMuscles: ["quadriceps", "hamstrings", "glutes", "calves"],
      instructions: [
        "Stand facing a wall with your feet hip-width apart.",
        "Place your hands on the wall for support.",
        "Engage your core and lift your right knee up towards your chest, while keeping your left foot on the ground.",
        "Quickly switch legs, bringing your left knee up towards your chest and lowering your right foot back down.",
        "Continue alternating legs in a running motion, bringing your knees up as high as possible.",
        "Maintain a fast pace and keep your upper body stable throughout the exercise.",
        "Repeat for the desired duration or number of repetitions.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/bq3ByUbZMQ5At4",
      id: "0501",
      name: "jack burpee",
      target: "cardiovascular system",
      secondaryMuscles: [
        "quadriceps",
        "hamstrings",
        "calves",
        "shoulders",
        "triceps",
        "core",
      ],
      instructions: [
        "Start in a standing position with your feet shoulder-width apart.",
        "Lower your body into a squat position, placing your hands on the ground in front of you.",
        "Kick your feet back, landing in a push-up position.",
        "Perform a push-up, lowering your chest to the ground and then pushing back up.",
        "Jump your feet forward, landing in a squat position.",
        "Jump up explosively, reaching your arms overhead.",
        "Land softly and immediately lower back into the squat position to begin the next repetition.",
      ],
    },
    {
      bodyPart: "cardio",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/93oAXnkoEgYr-M",
      id: "3224",
      name: "jack jump (male)",
      target: "cardiovascular system",
      secondaryMuscles: ["quadriceps", "calves"],
      instructions: [
        "Stand with your feet together and your arms by your sides.",
        "Jump up, spreading your feet apart and raising your arms above your head.",
        "As you land, quickly jump back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
  ],
};

function randomizeArray(array: any[], currentDate: Date) {
  let seed =
    currentDate.getDate() + currentDate.getMonth() + currentDate.getFullYear();

  const randomize = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  return array.sort(() => randomize() - 0.5);
}

// export function populateDailyWorkout(
//   exercise: any,
//   variation: any,
//   currentDate: Date,
//   dayOfWeek: number
// ) {
//   const shuffledBack = randomizeArray(exercise.back, currentDate);
//   const shuffledChest = randomizeArray(exercise.chest, currentDate);
//   const shuffledLeg = randomizeArray(exercise.leg, currentDate);
//   const shuffledShoulder = randomizeArray(exercise.shoulder, currentDate);
//   const shuffledUpperArm = randomizeArray(exercise.upper_arm, currentDate);
//   // const shuffledLowerArm = [...exercise.lower_arm].sort(() => random() - 0.5);
//   // const shuffledCardio = [...exercise.cardio].sort(() => random() - 0.5);
//   const shuffledCardio = randomizeArray(exercise.cardio, currentDate);
//   const shuffledLowerArm = randomizeArray(exercise.lower_arm, currentDate);

//   const selectedBack = shuffledBack.slice(0, variation.back);
//   const selectedChest = shuffledChest.slice(0, variation.chest);
//   const selectedLeg = shuffledLeg.slice(0, variation.leg);
//   const selectedShoulder = shuffledShoulder.slice(0, variation.shoulder);
//   const selectedUpperArm = shuffledUpperArm.slice(0, variation.upper_arm);
//   const selectedLowerArm = shuffledLowerArm.slice(0, variation.lower_arm);
//   const selectedCardio = shuffledCardio.slice(0, variation.cardio);
//   const dayPropertyName = `daily_${getDayName(dayOfWeek)}`;
//   let payload;
//   switch (dayOfWeek) {
//     case 0: // Sunday
//       console.log("sunday");
//       break;
//     case 1: // Monday
//       console.log("monday");
//       break;
//     case 2: // Tuesday
//       console.log("tuesday");
//       break;
//     case 3: // Wednesday
//       console.log("wednesday");
//       break;
//     case 4: // Thursday
//       console.log("thursday");
//       payload = exercise[`${dayPropertyName}`] = [
//         ...selectedLowerArm,
//         ...selectedCardio,
//       ];
//       console.log("aypload", payload);
//       return payload;
//     case 5: // Friday
//       console.log("friday");
//       break;
//     case 6: // Saturday
//       console.log("saturday");
//       break;
//     default:
//       console.log("default");
//   }

//   console.log("payloa1", payload);
//   // Return the selected exercises for the current day
//   return payload;
// }

export function populateDailyWorkout(
  exercise: any,
  variation: any,
  currentDate: Date,
  dayOfWeek: number
) {
  const properties = [
    "back",
    "chest",
    "leg",
    "shoulder",
    "upper_arm",
    "cardio",
    "lower_arm",
  ];
  const selectedExercises: any = {};

  properties.forEach((property) => {
    const shuffled = randomizeArray(exercise[property], currentDate);
    selectedExercises[property] = shuffled.slice(0, variation[property]);
  });

  const dayPropertyName = `daily_${getDayName(dayOfWeek)}`;
  console.log("a", dayPropertyName);
  let payload;

  switch (dayOfWeek) {
    case 0: // Sunday
      console.log("sunday");
      payload = exercise[dayPropertyName] = [
        ...selectedExercises.chest,
        ...selectedExercises.back,
      ];
      return payload;
    case 1: // Monday
      console.log("monday");
      payload = exercise[dayPropertyName] = [
        ...selectedExercises.shoulder,
        ...selectedExercises.upper_arm,
      ];
      return payload;
    case 2: // Tuesday
      console.log("tuesday");
      payload = exercise[dayPropertyName] = [
        ...selectedExercises.leg,
        ...selectedExercises.cardio,
      ];
      return payload;
    case 3: // Wednesday
      console.log("wednesday");
      payload = exercise[dayPropertyName] = [
        ...selectedExercises.chest,
        ...selectedExercises.shoulder,
      ];
      return payload;
    case 4: // Thursday
      console.log("thursday");
      payload = exercise[dayPropertyName] = [
        ...selectedExercises.upper_arm,
        ...selectedExercises.lower_arm,
      ];
      console.log("payload", payload);
      return payload;
    case 5: // Friday
      console.log("friday");
      payload = exercise[dayPropertyName] = [
        ...selectedExercises.back,
        ...selectedExercises.shoulder,
      ];
      return payload;
    case 6: // Saturday
      console.log("saturday");
      payload = exercise[dayPropertyName] = [
        ...selectedExercises.leg,
        ...selectedExercises.cardio,
      ];
      return payload;
    default:
      console.log("default");
  }
}

export async function populateDailyWorkoutApi(dayOfWeek: number) {
  const fetchExercise = async (target: string) => {
    try {
      const url = `https://exercisedb.p.rapidapi.com/exercises/target/${target}?limit=10&offset=0`;
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  switch (dayOfWeek) {
    case 0: // Sunday
      console.log("sunday");
      try {
        const result = await fetchExercise("adductors");
        return result;
      } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
      }
    case 1: // Monday
      console.log("monday");
      try {
        const result = await fetchExercise("adductors");
        return result;
      } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
      }
    case 2: // Tuesday
      console.log("tuesday");
      try {
        const result = await fetchExercise("hamstrings");
        return result;
      } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
      }
    case 3: // Wednesday
      console.log("wednesday");
      try {
        const result = await fetchExercise("delts");
        return result;
      } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
      }
    case 4: // Thursday
      console.log("thursday");
      try {
        const result = await fetchExercise("spine");
        return result;
      } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
      }
    case 5: // Friday
      console.log("friday");
      try {
        const result = await fetchExercise("quads");
        return result;
      } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
      }
    case 6: // Saturday
      console.log("saturday");
      try {
        const result = await fetchExercise("biceps");
        return result;
      } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
      }
    default:
      console.log("default");
      return false;
  }
}

export function getDayName(dayOfWeek: number): string {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return days[dayOfWeek];
}

// export function populateDailyWorkout(
//   exercise: any,
//   lowerArmCount: number,
//   cardioCount: number,
//   currentDate: Date,
//   dayOfWeek: number // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
// ) {
//   let seed =
//     currentDate.getDate() + currentDate.getMonth() + currentDate.getFullYear();

//   const random = () => {
//     const x = Math.sin(seed++) * 10000;
//     return x - Math.floor(x);
//   };

//   const shuffledLowerArm = [...exercise.lower_arm].sort(() => random() - 0.5);
//   const shuffledCardio = [...exercise.cardio].sort(() => random() - 0.5);

//   const selectedLowerArm = shuffledLowerArm.slice(0, lowerArmCount);
//   const selectedCardio = shuffledCardio.slice(0, cardioCount);

//   // Define variable to hold the selected exercises based on the day
//   let selectedExercises = [];

//   // Determine which daily exercise data to return based on the day of the week
//   switch (dayOfWeek) {
//     case 0: // Sunday
//       selectedExercises = selectedLowerArm.concat(selectedCardio);
//       break;
//     case 1: // Monday
//       selectedExercises = selectedLowerArm.concat(selectedCardio);
//       break;
//     case 2: // Tuesday
//       // Define Tuesday specific exercises here if needed
//       break;
//     case 3: // Wednesday
//       selectedExercises = selectedLowerArm.concat(selectedCardio);
//       // Define Wednesday specific exercises here if needed
//       break;
//     case 4: // Thursday
//       // Define Thursday specific exercises here if needed
//       break;
//     case 5: // Friday
//       // Define Friday specific exercises here if needed
//       break;
//     case 6: // Saturday
//       // Define Saturday specific exercises here if needed
//       break;
//     default:
//       selectedExercises = selectedLowerArm.concat(selectedCardio); // Default to Monday exercises
//   }

//   // Return the selected exercises for the specified day
//   return selectedExercises;
// }
