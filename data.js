// ==========================================
// HappyCare 데이터 관리 파일 (data.js)
// 새로운 증상, 약품, 질환 추가 시 이 파일만 수정하세요.
// ==========================================

// 1. 증상 및 키워드 데이터
const SYMPTOMS = [
    // 두통 (Headache)
    { id: "h_migraine", category: "headache", label: "한쪽 머리 욱신거림", keywords: ["머리", "두통", "편두통", "한쪽", "관자놀이", "욱신", "띵"] },
    { id: "h_tension", category: "headache", label: "머리 조임/지욱지욱", keywords: ["머리", "두통", "조임", "지욱지욱", "압박감", "뒷목", "묵직"] },
    { id: "h_dizzy", category: "headache", label: "어지러움/띵함", keywords: ["어지러움", "띵함", "어지럽다", "머리", "빙글"] },
    { id: "h_front", category: "headache", label: "이마/눈주변 통증", keywords: ["이마", "눈주변", "전두통", "축농증", "눈이"] },

    // 통증 & 근육통 (Pain)
    { id: "p_heel", category: "pain", label: "발 뒤꿈치/발바닥 통증", keywords: ["발", "뒤꿈치", "뒷꿈치", "발바닥", "아킬레스", "족천", "족근", "아파요", "아파", "디딜때"] },
    { id: "p_muscle", category: "pain", label: "전신/부위별 근육통", keywords: ["근육통", "몸살", "뻐근", "아프다", "알쌘", "쑤심", "몸이", "쑤셔"] },
    { id: "p_joint", category: "pain", label: "관절 통증 (무릎/손목/발목)", keywords: ["관절", "무릎", "손목", "발목", "접질림", "삐었을때", "무릎이"] },
    { id: "p_back", category: "pain", label: "허리 통증/요통", keywords: ["허리", "요통", "디스크", "허리아파", "허리가"] },
    { id: "p_shoulder", category: "pain", label: "어깨/목 뻐근함(담)", keywords: ["어깨", "목", "담", "결림", "담걸림", "어깨가"] },
    { id: "p_wrist", category: "pain", label: "손목 찌릿함/터널증후군", keywords: ["손목", "손가락", "찌릿", "터널", "손목이"] },

    // 소화/위장 (Digestive)
    { id: "d_heartburn", category: "digestive", label: "속쓰림/신물", keywords: ["속쓰림", "위통", "신물", "역류", "속이"] },
    { id: "d_indigestion", category: "digestive", label: "체함/소화불량/더부룩", keywords: ["체함", "소화불량", "더부룩", "답답", "체했을때", "속더부룩"] },
    { id: "d_diarrhea", category: "digestive", label: "복통/설사", keywords: ["복통", "배아픔", "설사", "배탈", "물설사", "배가"] },
    { id: "d_constipation", category: "digestive", label: "변비/답답함", keywords: ["변비", "배변", "아랫배"] },
    { id: "d_nausea", category: "digestive", label: "구토/메스꺼움", keywords: ["구토", "메스꺼움", "울렁거림", "토할것같아"] },

    // 감기/호흡기 (Cold)
    { id: "c_fever", category: "cold", label: "발열/오한", keywords: ["열", "열나요", "오한", "춥다", "고열"] },
    { id: "c_cough", category: "cold", label: "기침/가래", keywords: ["기침", "가래", "목간지러움", "콜록"] },
    { id: "c_sorethroat", category: "cold", label: "목 통증/인후통", keywords: ["목", "인후통", "목아픔", "침침", "목부음"] },
    { id: "c_runny", category: "cold", label: "콧물/코막힘", keywords: ["콧물", "코막힘", "비염", "재채기"] },

    // 피부/기타 (Skin)
    { id: "s_hives", category: "skin", label: "두드러기/가려움", keywords: ["두드러기", "가려움", "발진", "알레르기"] },
    { id: "s_dryeye", category: "skin", label: "눈 피로/건조", keywords: ["눈", "건조", "눈물", "뻑뻑"] },
    { id: "s_canker", category: "skin", label: "구내염/입안 헐음", keywords: ["구내염", "입안", "혓바늘"] }
];

// 2. 약품 데이터 (OTC: 일반의약품, Rx: 전문의약품/처방전)
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
        effect: "강한 소염진통 (관절염, 족저근막염, 두통, 치통)",
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
        name: "신제품 소염진통 파스류",
        type: "OTC",
        price: "약 3,000원 ~ 5,000원 (5~7매)",
        effect: "국소 부위 근육통, 관절통, 염좌 완화",
        dose: "1일 1~2회 환부에 부착",
        sideEffects: "피부 발진, 가려움증 발생 시 즉시 제거."
    },
    "m_gaviscon": {
        name: "개비스콘 / 겔포스",
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
    "m_colda": {
        name: "판콜에스 / 화콜종합감기약",
        type: "OTC",
        price: "약 3,000원 ~ 4,000원",
        effect: "감기 초기 종합 증상 (발열, 콧물, 기침, 몸살)",
        dose: "1일 3회 식후 30분 복용",
        sideEffects: "졸음 유발 가능성이 있으므로 운전 시 주의."
    },
    "m_zyrtec": {
        name: "지르텍 / 세티리진",
        type: "OTC",
        price: "약 4,000원 ~ 5,000원 (10정)",
        effect: "알레르기 비염, 두드러기, 가려움증 완화",
        dose: "1일 1회 취침 전 1정 복용",
        sideEffects: "졸음이 올 수 있으므로 운전 및 정밀 작업 전 주의."
    },
    "m_albothyl": {
        name: "알보칠 / 오라메디",
        type: "OTC",
        price: "약 6,000원 ~ 7,000원",
        effect: "구내염, 혓바늘 상처 치료",
        dose: "면봉으로 1일 1~2회 질환 부위에 도포",
        sideEffects: "도포 시 강한 통증 느낌. 치아에 닿지 않도록 주의."
    }
};

// 3. 질환 및 처치법 데이터
const DISEASES = [
    {
        id: "d_plantar",
        name: "족저근막염 / 발 통증",
        category: "pain",
        symptomIds: ["p_heel", "p_muscle"],
        description: "발바닥 발꿈치 근막에 염증이 생겨 아침 첫발을 디딜 때 강한 통증이 발생합니다.",
        treatment: "1. 아킬레스건 및 발바닥 스트레칭 (골프공이나 병으로 발바닥 굴리기)\n2. 쿠션감 있는 실내화 착용\n3. 통증 부위 15분간 냉찜질",
        meds: ["m_naproxen", "m_advil", "m_pas", "m_celebrex"]
    },
    {
        id: "d_tension_headache",
        name: "긴장성 두통",
        category: "headache",
        symptomIds: ["h_tension", "h_dizzy", "p_shoulder"],
        description: "스트레스나 목/어깨 근육의 긴장으로 조이는 듯한 통증이 발생합니다.",
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
        id: "d_myalgia",
        name: "담 결림 / 근육통",
        category: "pain",
        symptomIds: ["p_muscle", "p_shoulder", "p_back"],
        description: "갑작스러운 운동이나 잘못된 자세로 근육이 뭉쳐 통증이 발생하는 상태입니다.",
        treatment: "1. 온찜질로 근육 이완 (1회 20분)\n2. 가벼운 기지개 스트레칭\n3. 무리한 운동 피하기",
        meds: ["m_advil", "m_pas"]
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
        id: "d_gastritis",
        name: "위염 / 역류성 식도염",
        category: "digestive",
        symptomIds: ["d_heartburn", "d_indigestion", "d_nausea"],
        description: "위점막 자극이나 위산 역류로 속이 쓰리고 신물이 올라오며 상복부 통증이 나타납니다.",
        treatment: "1. 식사 후 바로 눕지 않기 (최소 3시간 유지)\n2. 자극적인 음식을 피하고 소식하기",
        meds: ["m_gaviscon", "m_bearse"]
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
        id: "d_flu",
        name: "감기 / 몸살감기",
        category: "cold",
        symptomIds: ["c_fever", "c_cough", "c_sorethroat", "c_runny", "p_muscle"],
        description: "바이러스 감염으로 발열, 콧물, 기침, 근육통이 함께 나타나는 대표적인 호흡기 질환입니다.",
        treatment: "1. 따뜻한 물 자주 마시기 및 실내 습도 50~60% 유지\n2. 충분한 수면과 휴식",
        meds: ["m_colda", "m_tylenol", "m_advil"]
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
        name: "구내염 (입안 헐음)",
        category: "skin",
        symptomIds: ["s_canker"],
        description: "면역력 저하나 피로로 입안 점막에 염증이 생겨 음식을 먹을 때 통증을 유발합니다.",
        treatment: "1. 비타민 B/C 복용 및 구강 청결 유지\n2. 자극적이고 짠 음식 자제",
        meds: ["m_albothyl"]
    }
];
