// ==========================================
// HappyCare 데이터 관리 파일 (data.js)
// 증상 35종 / 질환 45종 / 약품 22종 완벽 매칭
// ==========================================

// 1. 증상 및 키워드 데이터 (총 35개 항목)
const SYMPTOMS = [
    // [두통 & 정신/신경] (6종)
    { id: "h_migraine", category: "headache", label: "한쪽 머리 욱신거림", keywords: ["머리", "두통", "편두통", "한쪽", "관자놀이", "욱신", "띵"] },
    { id: "h_tension", category: "headache", label: "머리 조임/지욱지욱", keywords: ["머리", "두통", "조임", "지욱지욱", "압박감", "뒷목", "묵직"] },
    { id: "h_dizzy", category: "headache", label: "어지러움/띵함/빙글돎", keywords: ["어지러움", "띵함", "어지럽다", "머리", "빙글", "이명", "현기증"] },
    { id: "h_front", category: "headache", label: "이마/눈주변 통증", keywords: ["이마", "눈주변", "전두통", "축농증", "눈이", "압박"] },
    { id: "h_insomnia", category: "headache", label: "불면/잠들기 어려움", keywords: ["불면", "잠", "수면", "입면", "자고싶다", "새벽"] },
    { id: "h_fatigue", category: "headache", label: "만성 피로/무기력", keywords: ["피로", "피곤", "무기력", "나른", "만성피로", "졸림"] },

    // [통증 & 근육/관절] (8종)
    { id: "p_heel", category: "pain", label: "발 뒤꿈치/발바닥 통증", keywords: ["발", "뒤꿈치", "뒷꿈치", "발바닥", "아킬레스", "족천", "족근", "디딜때"] },
    { id: "p_muscle", category: "pain", label: "전신/부위별 근육통", keywords: ["근육통", "몸살", "뻐근", "아프다", "알쌘", "쑤심", "몸이", "쑤셔"] },
    { id: "p_joint", category: "pain", label: "관절 통증 (무릎/손목/발목)", keywords: ["관절", "무릎", "손목", "발목", "접질림", "삐었을때", "연골"] },
    { id: "p_back", category: "pain", label: "허리 통증/요통", keywords: ["허리", "요통", "디스크", "허리아파", "허리가", "요추"] },
    { id: "p_shoulder", category: "pain", label: "어깨/목 뻐근함(담)", keywords: ["어깨", "목", "담", "결림", "담걸림", "어깨가", "승모근"] },
    { id: "p_wrist", category: "pain", label: "손목 찌릿함/터널증후군", keywords: ["손목", "손가락", "찌릿", "터널", "방아쇠"] },
    { id: "p_cramp", category: "pain", label: "다리/쥐 남(경련)", keywords: ["쥐", "경련", "종아리", "다리쥐", "저림"] },
    { id: "p_tooth", category: "pain", label: "치통/잇몸 부음", keywords: ["치통", "치아", "잇몸", "이아픔", "이빨", "충치"] },

    // [소화/위장 & 내과] (8종)
    { id: "d_heartburn", category: "digestive", label: "속쓰림/신물 역류", keywords: ["속쓰림", "위통", "신물", "역류", "속이", "명치"] },
    { id: "d_indigestion", category: "digestive", label: "체함/소화불량/더부룩", keywords: ["체함", "소화불량", "더부룩", "답답", "체했을때", "체기"] },
    { id: "d_diarrhea", category: "digestive", label: "복통/설사", keywords: ["복통", "배아픔", "설사", "배탈", "물설사", "배가", "꾸르륵"] },
    { id: "d_constipation", category: "digestive", label: "변비/배변 곤란", keywords: ["변비", "배변", "아랫배", "숙변", "묵직"] },
    { id: "d_nausea", category: "digestive", label: "구토/메스꺼움/울렁거림", keywords: ["구토", "메스꺼움", "울렁거림", "토할것같아", "구역질"] },
    { id: "d_bloating", category: "digestive", label: "복부 팽만/가스 차오름", keywords: ["가스", "팽만", "배에가스", "방귀", "더부룩"] },
    { id: "d_hemorrhoid", category: "digestive", label: "항문 통증/출혈/치질", keywords: ["항문", "치질", "배변통증", "피남"] },
    { id: "d_hangover", category: "digestive", label: "숙취/숙취로 인한 속울렁", keywords: ["숙취", "술", "음주", "숙취해소"] },

    // [감기/호흡기/이비인후] (7종)
    { id: "c_fever", category: "cold", label: "발열/오한/열감", keywords: ["열", "열나요", "오한", "춥다", "고열", "미열"] },
    { id: "c_cough", category: "cold", label: "기침/가래", keywords: ["기침", "가래", "목간지러움", "콜록", "마른기침"] },
    { id: "c_sorethroat", category: "cold", label: "목 통증/인후통/편도부음", keywords: ["목", "인후통", "목아픔", "침침", "목부음", "편도"] },
    { id: "c_runny", category: "cold", label: "콧물/코막힘/재채기", keywords: ["콧물", "코막힘", "비염", "재채기", "코맹맹"] },
    { id: "c_phlegm", category: "cold", label: "노란 가래/답답함", keywords: ["노란가래", "가래", "기관지"] },
    { id: "c_stuffy_ear", category: "cold", label: "귀 먹먹함/귀 통증", keywords: ["귀", "먹먹", "중이염", "귀통증"] },
    { id: "c_hoarse", category: "cold", label: "목쉼/목소리 변함", keywords: ["목쉼", "목소리", "성대"] },

    // [피부/눈/여성/기타] (6종)
    { id: "s_hives", category: "skin", label: "두드러기/가려움/발진", keywords: ["두드러기", "가려움", "발진", "알레르기", "모기", "아토피"] },
    { id: "s_dryeye", category: "skin", label: "눈 피로/건조/충혈", keywords: ["눈", "건조", "눈물", "뻑뻑", "눈피로", "안구건조", "충혈"] },
    { id: "s_canker", category: "skin", label: "구내염/입안 헐음", keywords: ["구내염", "입안", "혓바늘", "입술", "혓바닥"] },
    { id: "s_burn_wound", category: "skin", label: "화상/찰과상/상처", keywords: ["화상", "상처", "찰과상", "베임", "데임"] },
    { id: "s_period_pain", category: "skin", label: "생리통/아랫배 묵직함", keywords: ["생리통", "월경", "아랫배아픔", "생리"] },
    { id: "s_stye", category: "skin", label: "다래끼/눈꺼풀 부음", keywords: ["다래끼", "눈꺼풀", "눈부음"] }
];

// 2. 약품 데이터 (총 22종)
const MEDICINES = {
    "m_tylenol": {
        name: "타이레놀정 500mg",
        type: "OTC",
        price: "약 3,000원 ~ 3,500원 (10정)",
        effect: "두통, 치통, 감기 발열 및 몸살 통증 완화",
        dose: "1회 1~2정, 1일 3~4회 복용 (최대 4,000mg 초과 금지)",
        sideEffects: "간독성 위험이 있으므로 복용 중 음주 절대 금지."
    },
    "m_advil": {
        name: "애드빌 / 이부프로펜",
        type: "OTC",
        price: "약 3,500원 ~ 4,500원 (10소프트젤)",
        effect: "편두통, 소염진통, 근육통, 관절통 완화",
        dose: "1회 1정, 1일 3회 식후 즉시 복용",
        sideEffects: "위장 장애(속쓰림)가 발생할 수 있으므로 반드시 식후 복용."
    },
    "m_naproxen": {
        name: "탁센 / 나프록센",
        type: "OTC",
        price: "약 3,000원 ~ 4,000원 (10캡슐)",
        effect: "강한 소염진통 (관절염, 족저근막염, 두통, 생리통)",
        dose: "1회 1캡슐, 1일 2회 식후 복용",
        sideEffects: "위장관 자극 유의, 위장 약한 경우 식후 충분한 물과 복용."
    },
    "m_celebrex": {
        name: "세레브렉스캡슐 (전문)",
        type: "Rx",
        price: "처방전 기준 약 3,000원 ~ 7,000원 (본인부담금)",
        effect: "소염진통제 (관절염, 족저근막염, 심한 근육통 처방)",
        dose: "의사 처방에 따라 1일 1~2회 복용",
        sideEffects: "속쓰림, 심혈관계 위험성 유의. 의사 지시 준수."
    },
    "m_pas": {
        name: "소염진통 파스류 (붙이는 파스/바르는 파스)",
        type: "OTC",
        price: "약 3,000원 ~ 5,000원",
        effect: "국소 부위 근육통, 관절통, 염좌 완화",
        dose: "1일 1~2회 환부에 부착/도포",
        sideEffects: "피부 발진, 가려움증 발생 시 즉시 제거."
    },
    "m_gaviscon": {
        name: "개비스콘 / 겔포스 / 닥터베어",
        type: "OTC",
        price: "약 5,000원 ~ 6,000원 (4포)",
        effect: "위산역류, 속쓰림 방지 보호막 형성",
        dose: "식후 및 취침 전 1포 복용",
        sideEffects: "장기 복용 피할 것. 다른 약물과 1~2시간 간격 유지."
    },
    "m_bearse": {
        name: "베아제 / 훼스탈",
        type: "OTC",
        price: "약 3,000원 ~ 4,000원 (10정)",
        effect: "소화불량, 과식, 가스차는 증상 완화",
        dose: "1회 1정, 1일 3회 식후 복용",
        sideEffects: "만성 소화불량 시 의사 진료 필요."
    },
    "m_smecta": {
        name: "스타빅 / 스멕타현탁액",
        type: "OTC",
        price: "약 4,000원 ~ 5,000원 (6포)",
        effect: "급성 설사 흡착 및 장 점막 보호",
        dose: "1회 1포, 식간 3회 복용",
        sideEffects: "다른 약과 복용 시 1~2시간 시간 차를 둘 것."
    },
    "m_dulcolax": {
        name: "둘코락스 / 메이킨 Q",
        type: "OTC",
        price: "약 4,000원 ~ 5,000원 (10정)",
        effect: "변비 완화 및 장 운동 촉진",
        dose: "1일 1회 취침 전 1~2정 복용",
        sideEffects: "복통이나 습관성 복용 주의. 우유와 동시 복용 금지."
    },
    "m_colda": {
        name: "판콜에스 / 화콜종합감기약",
        type: "OTC",
        price: "약 3,000원 ~ 4,000원",
        effect: "감기 초기 종합 증상 (발열, 콧물, 기침, 몸살)",
        dose: "1일 3회 식후 30분 복용",
        sideEffects: "졸음 유발 가능성이 있으므로 운전 시 주의."
    },
    "m_zyrtec": {
        name: "지르텍 / 세티리진 / 아젤라스틴",
        type: "OTC",
        price: "약 4,000원 ~ 5,000원 (10정)",
        effect: "알레르기 비염, 두드러기, 가려움증 완화",
        dose: "1일 1회 취침 전 1정 복용",
        sideEffects: "졸음이 올 수 있으므로 운전 및 정밀 작업 전 주의."
    },
    "m_albothyl": {
        name: "알보칠 / 오라메디 / 페리덱스",
        type: "OTC",
        price: "약 6,000원 ~ 7,000원",
        effect: "구내염, 혓바늘 상처 치료",
        dose: "면봉으로 1일 1~2회 질환 부위에 도포",
        sideEffects: "도포 시 강한 통증 느낌. 치아에 닿지 않도록 주의."
    },
    "m_artificial_tears": {
        name: "인공눈물 (리프레쉬 / 프렌즈 / 프렌즈드롭)",
        type: "OTC",
        price: "약 5,000원 ~ 10,000원",
        effect: "안구 건조 완화 및 눈 피로 회복",
        dose: "필요 시 1~2방울 점안",
        sideEffects: "일회용 인공눈물은 개봉 후 하루 내 사용 권장."
    },
    "m_bonine": {
        name: "보나링에이 / 멀미약",
        type: "OTC",
        price: "약 2,000원 ~ 3,000원",
        effect: "어지러움, 구토, 멀미 증상 완화",
        dose: "필요 시 1회 1정 복용",
        sideEffects: "졸음 및 입마름 발생 가능."
    },
    "m_magnesium": {
        name: "마그네슘 영양제 / 엠지락",
        type: "OTC",
        price: "약 15,000원 ~ 30,000원",
        effect: "근육 경련(쥐 남), 눈밑 떨림, 피로 회복",
        dose: "1일 1~2회 복용",
        sideEffects: "과다 복용 시 묽은 변/설사 유발 가능."
    },
    "m_burn_ointment": {
        name: "미보연고 / 아즈렌 / 비아핀",
        type: "OTC",
        price: "약 7,000원 ~ 10,000원",
        effect: "1~2도 경미한 화상 진정 및 상처 재생",
        dose: "1일 수회 질환 부위에 얇게 도포",
        sideEffects: "감염성 심한 상처 시 의사 진료 필요."
    },
    "m_fucidin": {
        name: "후시딘 / 마데카솔 / 무피로신",
        type: "OTC",
        price: "약 4,500원 ~ 6,000원",
        effect: "찰과상, 상처 부위 2차 세균 감염 방지",
        dose: "1일 1~2회 얇게 바름",
        sideEffects: "장기 광범위 사용 자제."
    },
    "m_buscopan": {
        name: "부스코판 플러스 / 진경진통제",
        type: "OTC",
        price: "약 4,000원 ~ 5,000원",
        effect: "복통, 위경련, 심한 생리통 완화",
        dose: "1회 1~2정, 1일 3회 복용",
        sideEffects: "입마름, 시야 우려 시 운전 주의."
    },
    "m_heparin": {
        name: "푸레파인 / 치센 / 헤파린 연고",
        type: "OTC",
        price: "약 7,000원 ~ 12,000원",
        effect: "치질 통증, 부종, 출혈 완화",
        dose: "1일 1~3회 환부 적용 또는 좌제 사용",
        sideEffects: "출혈 지속 시 항문외과 방문."
    },
    "m_stye_drop": {
        name: "신이레드 / 안다래끼 안약 / 항생제 안약",
        type: "OTC",
        price: "약 3,000원 ~ 5,000원",
        effect: "다래끼, 결막염, 눈꺼풀 염증 완화",
        dose: "1일 3~6회, 1회 1~2방울 점안",
        sideEffects: "증상 악화 시 안과 방문."
    },
    "m_melatonin_herb": {
        name: "아론정 / 길초근 추출물 (수면유도제)",
        type: "OTC",
        price: "약 3,000원 ~ 5,000원",
        effect: "일시적 불면증 완화 및 수면 유도",
        dose: "취침 30분 전 1정 복용",
        sideEffects: "다음 날 낮 동안 졸음이 지속될 수 있음."
    },
    "m_hangover_drink": {
        name: "상쾌환 / 여명 / 헤포스 / 가레오",
        type: "OTC",
        price: "약 3,000원 ~ 10,000원",
        effect: "알코올 분해 촉진, 간 보호 및 숙취 속울렁 완화",
        dose: "음주 전후 1회 섭취",
        sideEffects: "수분 보충 병행 권장."
    }
};

// 3. 질환 및 처치법 데이터 (총 45개 질환 완벽 구성)
const DISEASES = [
    // --- [통증 & 근골격계 질환] (10종) ---
    {
        id: "d_plantar",
        name: "족저근막염 / 발바닥 통증",
        category: "pain",
        symptomIds: ["p_heel", "p_muscle"],
        description: "발바닥 발꿈치 근막에 염증이 생겨 아침 첫발을 디딜 때 강한 통증이 발생합니다.",
        treatment: "1. 아킬레스건 및 발바닥 스트레칭 (골프공이나 병으로 발바닥 굴리기)\n2. 쿠션감 있는 실내화 착용\n3. 통증 부위 15분간 냉찜질",
        meds: ["m_naproxen", "m_advil", "m_pas", "m_celebrex"]
    },
    {
        id: "d_myalgia",
        name: "담 결림 / 급성 근육통",
        category: "pain",
        symptomIds: ["p_muscle", "p_shoulder", "p_back"],
        description: "갑작스러운 운동이나 잘못된 자세로 근육이 뭉쳐 통증이 발생하는 상태입니다.",
        treatment: "1. 온찜질로 근육 이완 (1회 20분)\n2. 가벼운 기지개 스트레칭\n3. 무리한 운동 피하기",
        meds: ["m_advil", "m_pas"]
    },
    {
        id: "d_joint_sprain",
        name: "관절 염좌 (삐었을 때)",
        category: "pain",
        symptomIds: ["p_joint"],
        description: "무릎, 손목, 발목 관절이나 인대가 삐거나 무리하여 통증 및 부종이 나타납니다.",
        treatment: "1. RICE 요법 (휴식 Rest, 냉찜질 Ice, 압박 Compression, 높이기 Elevation)\n2. 무리한 관절 사용 자제",
        meds: ["m_naproxen", "m_pas", "m_celebrex"]
    },
    {
        id: "d_back_pain",
        name: "요추 염좌 / 허리 통증",
        category: "pain",
        symptomIds: ["p_back", "p_muscle"],
        description: "무거운 물건을 들거나 잘못된 자세로 허리 근육과 인대에 무리가 간 상태입니다.",
        treatment: "1. 바닥보다는 약간 단단한 침대에 누워 휴식\n2. 초기 48시간은 냉찜질, 이후 온찜질\n3. 허리를 과도하게 숙이지 않기",
        meds: ["m_naproxen", "m_pas"]
    },
    {
        id: "d_carpal",
        name: "손목터널증후군",
        category: "pain",
        symptomIds: ["p_wrist", "p_joint"],
        description: "컴퓨터/스마트폰 사용으로 손목 신경이 압박받아 손가락과 손목이 찌릿한 증상입니다.",
        treatment: "1. 손목 보호대 착용 및 컴퓨터 작업 중 1시간마다 손목 스트레칭\n2. 온찜질 시행",
        meds: ["m_advil", "m_pas"]
    },
    {
        id: "d_leg_cramp",
        name: "다리 쥐 남 / 근육 경련",
        category: "pain",
        symptomIds: ["p_cramp", "p_muscle"],
        description: "수분 부족, 마그네슘 결핍, 피로로 인해 종아리나 다리 근육이 갑자기 수축하는 증상입니다.",
        treatment: "1. 발가락을 몸 쪽으로 당겨 종아리 근육 늘려주기\n2. 따뜻한 족욕 및 종아리 마사지\n3. 충분한 수분 섭취",
        meds: ["m_magnesium"]
    },
    {
        id: "d_toothache",
        name: "치통 / 잇몸염",
        category: "pain",
        symptomIds: ["p_tooth"],
        description: "충치, 치주염, 지덕주위염 등으로 인해 치아나 잇몸에 강한 통증이 발생합니다.",
        treatment: "1. 미지근한 소금물로 가글하기\n2. 얼음주머니로 뺨 외부에 냉찜질\n3. 빠른 시일 내 치과 방문",
        meds: ["m_tylenol", "m_naproxen"]
    },
    {
        id: "d_achilles",
        name: "아킬레스 건염",
        category: "pain",
        symptomIds: ["p_heel", "p_joint"],
        description: "발목 뒤쪽 아킬레스 힘줄에 무리가 가해져 걷거나 뛸 때 발뒷꿈치 위쪽이 아픕니다.",
        treatment: "1. 하이힐이나 바닥이 딱딱한 신발 피하기\n2. 종아리 스트레칭 및 냉찜질",
        meds: ["m_naproxen", "m_pas"]
    },
    {
        id: "d_turtle_neck",
        name: "거북목 증후군 / 경추 통증",
        category: "pain",
        symptomIds: ["p_shoulder", "h_tension"],
        description: "스마트폰이나 모니터를 숙여보아 목과 어깨 승모근 근육이 과도하게 긴장된 상태입니다.",
        treatment: "1. 모니터 높이를 눈높이로 조절\n2. 턱을 뒤로 당기는 젖히기 스트레칭 틈틈이 시행",
        meds: ["m_advil", "m_pas"]
    },
    {
        id: "d_tennis_elbow",
        name: "외측상과염 (테니스 엘보)",
        category: "pain",
        symptomIds: ["p_joint", "p_wrist"],
        description: "팔꿈치 과사용으로 인해 팔꿈치 외측 및 팔 근육에 통증이 생깁니다.",
        treatment: "1. 팔꿈치 및 손목 사용 줄이기\n2. 팔꿈치 보호대 착용 및 휴식",
        meds: ["m_naproxen", "m_pas"]
    },

    // --- [두통 & 신경계 질환] (6종) ---
    {
        id: "d_tension_headache",
        name: "긴장성 두통",
        category: "headache",
        symptomIds: ["h_tension", "h_dizzy", "p_shoulder"],
        description: "스트레스나 목/어깨 근육의 긴장으로 머리가 조이는 듯한 통증이 발생합니다.",
        treatment: "1. 따뜻한 찜질팩으로 뒷목과 어깨 마사지\n2. 목을 좌우/전후로 천천히 늘려주는 스트레칭\n3. 카페인 섭취 줄이기 및 충분한 수면",
        meds: ["m_tylenol", "m_advil"]
    },
    {
        id: "d_migraine",
        name: "편두통",
        category: "headache",
        symptomIds: ["h_migraine", "h_dizzy"],
        description: "머리 한쪽이 맥박 뛰듯 쿵쾅거리며 아프고, 빛이나 소리에 민감해질 수 있습니다.",
        treatment: "1. 어둡고 조용한 방에서 휴식\n2. 관자놀이나 이마에 차가운 물수건 찜질\n3. 증상 초기에 진통제 복용",
        meds: ["m_advil", "m_naproxen", "m_tylenol"]
    },
    {
        id: "d_vertigo",
        name: "이석증 / 어지럼증",
        category: "headache",
        symptomIds: ["h_dizzy", "d_nausea"],
        description: "귓속 이석이 탈락하거나 피로 등으로 인해 머리가 빙글빙글 도는 어지러움과 메스꺼움이 나타납니다.",
        treatment: "1. 갑작스러운 머리 움직임을 피하고 안정 취하기\n2. 어두운 곳에 편안히 누워 휴식\n3. 증상이 지속되면 이비인후과 방문",
        meds: ["m_bonine"]
    },
    {
        id: "d_insomnia_disorder",
        name: "일시적 불면증 / 수면 장애",
        category: "headache",
        symptomIds: ["h_insomnia", "h_fatigue"],
        description: "스트레스, 시차, 카페인 섭취 등으로 인해 잠들기 어렵거나 수면 유지가 힘든 상태입니다.",
        treatment: "1. 취침 1시간 전 스마트폰/TV 금지\n2. 따뜻한 우유 마시기 및 낮 동안 햇볕 20분 쬐기",
        meds: ["m_melatonin_herb"]
    },
    {
        id: "d_chronic_fatigue",
        name: "만성 피로 / 영양 불균형",
        category: "headache",
        symptomIds: ["h_fatigue", "p_muscle"],
        description: "충분한 휴식을 취해도 피로가 풀리지 않고 몸이 묵직하며 무기력한 증상입니다.",
        treatment: "1. 수분 및 비타민 B/C 보충\n2. 가벼운 유산소 운동 20분 시행\n3. 일정한 수면 패턴 유지",
        meds: ["m_magnesium"]
    },
    {
        id: "d_orthostatic_hypotension",
        name: "기립성 저혈압 / 순간 어지럼",
        category: "headache",
        symptomIds: ["h_dizzy"],
        description: "앉았다가 갑자기 일어설 때 순간적으로 혈압이 떨어져 눈앞이 아득해지고 어지러운 증상입니다.",
        treatment: "1. 일어설 때 천천히 단계적으로 일어나기\n2. 평소 충분한 수분 및 적절한 염분 섭취",
        meds: ["m_magnesium"]
    },

    // --- [소화기 & 위장 질환] (10종) ---
    {
        id: "d_gastritis",
        name: "위염 / 역류성 식도염",
        category: "digestive",
        symptomIds: ["d_heartburn", "d_indigestion", "d_nausea"],
        description: "위점막 자극이나 위산 역류로 속이 쓰리고 신물이 올라오며 상복부 통증이 나타납니다.",
        treatment: "1. 식사 후 바로 눕지 않기 (최소 3시간 유지)\n2. 자극적인 음식을 피하고 소식하기",
        meds: ["m_gaviscon", "m_bearse"]
    },
    {
        id: "d_indigestion_disease",
        name: "급성 소화불량 / 체함",
        category: "digestive",
        symptomIds: ["d_indigestion", "d_nausea"],
        description: "과식이나 스트레스로 위장 운동이 정체되어 속이 더부룩하고 답답한 상태입니다.",
        treatment: "1. 미지근한 물 조금씩 마시기\n2. 배를 따뜻하게 마사지해주기\n3. 금식 후 가벼운 죽 섭취",
        meds: ["m_bearse"]
    },
    {
        id: "d_enteritis",
        name: "급성 장염 / 배탈",
        category: "digestive",
        symptomIds: ["d_diarrhea", "d_nausea"],
        description: "상한 음식 섭취나 세균 감염으로 잦은 설사와 복통이 유발되는 질환입니다.",
        treatment: "1. 미지근한 이온음료나 따뜻한 물로 수분 보충\n2. 1~2끼는 자극 없는 죽/음식 섭취\n3. 복부 따뜻하게 유지",
        meds: ["m_smecta", "m_bearse"]
    },
    {
        id: "d_ibs",
        name: "과민성 대장 증후군",
        category: "digestive",
        symptomIds: ["d_diarrhea", "d_constipation", "d_bloating"],
        description: "스트레스나 음식에 민감하여 복통, 가스 팽만, 복부 불편감, 설사/변비가 반복됩니다.",
        treatment: "1. 기름진 음식, 인공가공식품 줄이기\n2. 유산균 섭취 및 스트레스 완화",
        meds: ["m_smecta", "m_dulcolax"]
    },
    {
        id: "d_constipation_disease",
        name: "변비 / 장운동 저하",
        category: "digestive",
        symptomIds: ["d_constipation", "d_bloating"],
        description: "수분 부족이나 식이섬유 부족으로 장 운동이 둔해져 배변이 어렵고 아랫배가 묵직합니다.",
        treatment: "1. 공복에 미지근한 물 한 잔 마시기\n2. 식이섬유(채소, 사과 등) 섭취 늘리기\n3. 아랫배 시계 방향 마사지",
        meds: ["m_dulcolax"]
    },
    {
        id: "d_stomach_cramp",
        name: "위경련 / 급성 복통",
        category: "digestive",
        symptomIds: ["d_heartburn", "d_nausea"],
        description: "위장이 과도하게 수축하여 명치 끝이 쥐어짜듯 아픈 증상이 나타납니다.",
        treatment: "1. 따뜻한 찜질팩을 명치 위에 얹고 안정 취하기\n2. 자극적인 음식 금지",
        meds: ["m_buscopan"]
    },
    {
        id: "d_hangover_syndrome",
        name: "숙취 증후군",
        category: "digestive",
        symptomIds: ["d_hangover", "d_nausea", "h_dizzy"],
        description: "과도한 음주 후 아세트알데히드 분해가 지연되어 속울렁, 두통, 갈증이 일어납니다.",
        treatment: "1. 꿀물, 콩나물국 등 수분 및 당분 보충\n2. 충분한 수면",
        meds: ["m_hangover_drink", "m_tylenol"]
    },
    {
        id: "d_hemorrhoids_disease",
        name: "치질 / 항문 질환",
        category: "digestive",
        symptomIds: ["d_hemorrhoid", "d_constipation"],
        description: "배변 시 과도한 힘주기나 장시간 앉아있는 습관으로 항문 정맥이 부어오르거나 출혈이 생깁니다.",
        treatment: "1. 하루 2~3회 40도 온수로 좌욕 (10분)\n2. 변비 예방 및 장시간 변기에 앉아있지 않기",
        meds: ["m_heparin", "m_dulcolax"]
    },
    {
        id: "d_food_poisoning",
        name: "식중독",
        category: "digestive",
        symptomIds: ["d_diarrhea", "d_nausea", "c_fever"],
        description: "세균이나 독소에 오염된 음식을 먹은 뒤 복통, 구토, 설사, 미열이 함께 급성으로 발생하는 질환입니다.",
        treatment: "1. 수분 및 탈수 방지(이온음료)\n2. 지사제를 함부로 먹지 않고 독소 배출시키기",
        meds: ["m_smecta"]
    },
    {
        id: "d_motion_sickness",
        name: "멀미",
        category: "digestive",
        symptomIds: ["d_nausea", "h_dizzy"],
        description: "차, 배, 비행기 탑승 시 시각과 전정기관의 불일치로 울렁거림과 어지러움이 납니다.",
        treatment: "1. 창밖 먼 풍경 바라보기\n2. 탑승 30분 전 멀미약 미리 복용",
        meds: ["m_bonine"]
    },

    // --- [호흡기 & 감기/이비인후 질환] (9종) ---
    {
        id: "d_flu",
        name: "감기 / 몸살감기",
        category: "cold",
        symptomIds: ["c_fever", "c_cough", "c_sorethroat", "c_runny", "p_muscle"],
        description: "바이러스 감염으로 발열, 콧물, 기침, 근육통이 함께 나타나는 대표적인 호흡기 질환입니다.",
        treatment: "1. 따뜻한 물 자주 마시기 및 실내 습도 50~60% 유지\n2. 충분한 수면과 휴식",
        meds: ["m_colda", "m_tylenol", "m_advil"]
    },
    {
        id: "d_tonsillitis",
        name: "급성 편도염",
        category: "cold",
        symptomIds: ["c_sorethroat", "c_fever"],
        description: "편도선에 세균이나 바이러스가 침투하여 목이 부어오르고 침을 삼킬 때 심한 통증과 고열이 납니다.",
        treatment: "1. 미지근한 소금물 가글\n2. 목을 따뜻하게 유지하고 미지근한 물 많이 마시기",
        meds: ["m_advil", "m_tylenol"]
    },
    {
        id: "d_rhinitis",
        name: "알레르기 비염",
        category: "cold",
        symptomIds: ["c_runny"],
        description: "꽃가루, 먼지 등으로 코 점막이 자극받아 연속적인 재채기와 맑은 콧물, 코막힘이 발생합니다.",
        treatment: "1. 마스크 착용 및 환기\n2. 외출 후 손 씻기 및 세안\n3. 식염수로 코 세척",
        meds: ["m_zyrtec"]
    },
    {
        id: "d_sinusitis",
        name: "부비동염 (축농증)",
        category: "cold",
        symptomIds: ["h_front", "c_runny", "c_phlegm"],
        description: "코 주변 부비동에 염증이 생겨 노란 콧물과 가래가 나오고 이마/눈 주변이 압박받듯 아픕니다.",
        treatment: "1. 따뜻한 수건으로 이마와 코 주변 찜질\n2. 생리식염수로 코 세척\n3. 수분 충분히 섭취",
        meds: ["m_colda", "m_advil"]
    },
    {
        id: "d_bronchitis",
        name: "기관지염",
        category: "cold",
        symptomIds: ["c_cough", "c_phlegm"],
        description: "기관지 점막에 염증이 생겨 심한 기침과 함께 가래가 차오르고 가슴이 답답합니다.",
        treatment: "1. 따뜻한 차나 물 자주 마시기\n2. 가습기 틀어 실내 습도 유효하게 유지",
        meds: ["m_colda"]
    },
    {
        id: "d_otitis_media",
        name: "중이염 / 귀 염증",
        category: "cold",
        symptomIds: ["c_stuffy_ear", "c_fever"],
        description: "감기나 비염 후 바이러스가 귀 안쪽(중이)으로 침투해 귀 먹먹함과 통증을 유발합니다.",
        treatment: "1. 코를 한 쪽씩 살살 뚫기\n2. 귀에 물 들어가지 않도록 주의하고 이비인후과 방문",
        meds: ["m_advil", "m_tylenol"]
    },
    {
        id: "d_laryngitis",
        name: "후두염 / 목쉼",
        category: "cold",
        symptomIds: ["c_hoarse", "c_sorethroat"],
        description: "목소리를 과도하게 사용하거나 감기로 후두 점막이 부어 목이 쉬고 통증이 발생합니다.",
        treatment: "1. 대화 자제하고 성대 휴식 취하기\n2. 따뜻한 수분 보충",
        meds: ["m_tylenol"]
    },
    {
        id: "d_covid_like",
        name: "고열 감염성 질환 (독감/코로나 추정)",
        category: "cold",
        symptomIds: ["c_fever", "p_muscle", "c_sorethroat"],
        description: "38도 이상의 고열과 심한 전신 근육통, 목 통증이 급격히 나타나는 바이러스 질환입니다.",
        treatment: "1. 즉시 수분 보충 및 해열진통제 복용\n2. 자가진단키트 검사 및 병원 진료",
        meds: ["m_tylenol", "m_advil"]
    },
    {
        id: "d_cold_chills",
        name: "오한 / 초기 감기기운",
        category: "cold",
        symptomIds: ["c_fever", "p_muscle"],
        description: "체온 조절 이상이나 초기 감기 침투로 으슬으슬 춥고 몸이 쑤시는 단계입니다.",
        treatment: "1. 따뜻한 옷 입기 및 따뜻한 대추차/생강차 마시기\n2. 족욕 후 푹 쉬기",
        meds: ["m_colda", "m_tylenol"]
    },

    // --- [피부, 눈, 여성 & 기타 질환] (10종) ---
    {
        id: "d_dry_eye_syndrome",
        name: "안구건조증 / 눈 피로",
        category: "skin",
        symptomIds: ["s_dryeye"],
        description: "눈물층의 불균형이나 장시간 화면 시청으로 눈이 뻑뻑하고 피로감이 심해집니다.",
        treatment: "1. 인공눈물 자주 점안하기\n2. 50분 작업 후 10분 눈 감고 휴식\n3. 눈 주변 온찜질 해주기",
        meds: ["m_artificial_tears"]
    },
    {
        id: "d_hives",
        name: "알레르기 / 두드러기",
        category: "skin",
        symptomIds: ["s_hives"],
        description: "음식, 먼지, 스트레스 등으로 인해 피부가 빨갛게 부어오르고 가려운 증상입니다.",
        treatment: "1. 긁지 않고 차가운 찜질 해주기\n2. 알레르기 유발 원인 물질 피하기",
        meds: ["m_zyrtec"]
    },
    {
        id: "d_canker",
        name: "구내염 (입안 헐음 / 혓바늘)",
        category: "skin",
        symptomIds: ["s_canker"],
        description: "면역력 저하나 피로로 입안 점막에 염증이 생겨 음식을 먹을 때 통증을 유발합니다.",
        treatment: "1. 비타민 B/C 복용 및 구강 청결 유지\n2. 자극적이고 짠 음식 자제",
        meds: ["m_albothyl"]
    },
    {
        id: "d_dysmenorrhea",
        name: "생리통 / 월경통",
        category: "skin",
        symptomIds: ["s_period_pain", "p_back"],
        description: "월경 중 자궁 수축으로 아랫배가 묵직하고 통증이 발생하며 허리 통증이 동반되기도 합니다.",
        treatment: "1. 아랫배 따뜻한 핫팩 찜질\n2. 카페인 섭취 자제 및 통증 시작 직후 소염진통제 복용",
        meds: ["m_naproxen", "m_advil", "m_buscopan"]
    },
    {
        id: "d_stye_disease",
        name: "눈 다래끼 / 눈꺼풀 염증",
        category: "skin",
        symptomIds: ["s_stye", "s_dryeye"],
        description: "눈꺼풀의 분비샘에 세균이 감염되어 부어오르고 통증 및 이물감이 발생하는 질환입니다.",
        treatment: "1. 손으로 눈 비비지 않기\n2. 따뜻한 온찜질 (1회 10분, 하루 3회)\n3. 렌즈 착용 금지",
        meds: ["m_stye_drop"]
    },
    {
        id: "d_burn_wound",
        name: "경미한 화상 (1~2도)",
        category: "skin",
        symptomIds: ["s_burn_wound"],
        description: "뜨거운 물이나 물체에 데여 피부가 빨갛게 부어오르거나 작은 물집이 생기는 증상입니다.",
        treatment: "1. 흐르는 시원한 수돗물에 15~20분간 열 식히기 (얼음 직접 대기 금지)\n2. 물집 터뜨리지 않기",
        meds: ["m_burn_ointment"]
    },
    {
        id: "d_abrasion",
        name: "찰과상 / 상처",
        category: "skin",
        symptomIds: ["s_burn_wound"],
        description: "넘어지거나 긁혀 피부 표면에 상처가 나고 피가 나거나 진물이 나는 상태입니다.",
        treatment: "1. 깨끗한 물이나 생리식염수로 상처 부위 씻어내기\n2. 연고를 바르고 밴드/습윤드레싱 부착",
        meds: ["m_fucidin"]
    },
    {
        id: "d_contact_dermatitis",
        name: "접촉성 피부염 / 알레르기 피부",
        category: "skin",
        symptomIds: ["s_hives"],
        description: "화장품, 금속, 벌레 등에 피부가 접촉한 후 가려움, 발진, 홍반이 나타나는 증상입니다.",
        treatment: "1. 원인 물질 즉시 제거 및 세척\n2. 차가운 찜질 및 가려움 완화 항히스타민제 복용",
        meds: ["m_zyrtec"]
    },
    {
        id: "d_conjunctivitis",
        name: "결막염 / 눈 충혈",
        category: "skin",
        symptomIds: ["s_dryeye", "s_stye"],
        description: "세균, 바이러스, 알레르기로 눈 결막에 염증이 생겨 충혈, 눈곱, 가려움이 발생합니다.",
        treatment: "1. 눈 손대지 않기\n2. 개인 수건 사용으로 인근 감염 방지",
        meds: ["m_stye_drop", "m_artificial_tears"]
    },
    {
        id: "d_pms",
        name: "월경전 증후군 (PMS)",
        category: "skin",
        symptomIds: ["s_period_pain", "h_fatigue", "d_bloating"],
        description: "생리 시작 3~10일 전부터 정서적 불안, 아랫배 팽만, 피로, 유방 통증 등이 나타납니다.",
        treatment: "1. 주스, 과자 등 당분 및 나트륨 자제\n2. 가벼운 스트레칭과 수면",
        meds: ["m_magnesium", "m_buscopan"]
    }
];
