/*
ENFP, 말티즈, 아메리칸 숏헤어, 0
ENTJ, 골든 리트리버, 봄베이, 1
ISTP, 시바견, 스핑크스, 2
INTP, 비숑, 터키시앙고라, 3
ISTJ, 푸들, 이집션마우, 4
ENTP, 보더콜리, 컬러포인트 숏헤어, 5
ESFJ, 프렌치불독, 시베리아 고양이, 6
ISFP, 샤페이, 랙돌, 7
ESTP, 셰퍼드, 통키니즈, 8
ISFJ, 웰시코기, 스코티시폴드, 9
ESTJ, 도베르만, 노르웨이 숲, 10
INFP, 말라뮤트, 러시안블루, 11
INFJ, 사모예드, 라가머핀, 12
ENFJ, 포메라니안, 샴,13
ESFP, 코카 스패니얼, 브리티시 숏헤어, 14
INTJ, 허스키, 소말리, 15
*/
const qnaList = [
    {
        q: '1. 집이랑 밖 어디가 더 좋은가요?',
        a: [
            { answer: 'a. 집이 최고야!' ,type: [2, 3, 4, 7, 9, 11, 12, 15]},
            { answer: 'b. 밖으로 나가자!', type: [0, 1, 5, 6, 8, 10, 13, 14]}
        ]
    },
    {
        q: '2. 다른 사람들과 함께 시간 보내는 걸 좋아하나요?',
        a: [
            { answer: 'a. 응, 재밌잖아!',type: [0, 1, 5, 6, 8, 10, 13, 14] },
            { answer: 'b. 혼자 시간을 즐기는 편',type: [2, 3, 4, 7, 9, 11, 12, 15] }
        ]
    },
    {
        q: '3. 새로운 장소를 탐험하는 걸 좋아하나요?',
        a: [
            { answer: 'a. 어디든지 갈 준비가 돼 있어!',type: [0, 1, 3, 5, 11, 12, 13, 15] },
            { answer: 'b. 별로 흥미 없어. 익숙한 곳이 좋아.',type: [2, 4, 6, 7, 8, 9, 10, 14 ] }
        ]
    },
    {
        q: '4. 새로운 사람들과 쉽게 친해지는 편인가요?',
        a: [
            { answer: 'a. 완전!',type: [0, 1, 5, 6, 8, 10, 13, 14]},
            { answer: 'b. 조금 조심스러워...' ,type: [2, 3, 4, 7, 9, 11, 12, 15]}
        ]
    },
    {
        q: '5. 일 처리 방식이 어느 쪽에 가깝나요?',
        a: [
            { answer: 'a. 계획 세우는 걸 좋아해! 그 다음에 해보자고',type: [1, 4, 6, 9, 10, 12, 13,  15]},
            { answer: 'b. 계획은 상황에 따라 바뀔수도 있어! 일단 해보자고' ,type: [0, 2, 3, 5, 7, 8, 11, 14]}
        ]
    },
    {
        q: '6. 스트레스를 받을 때 어떤 방식으로 해결하려고 하나요?',
        a: [
            { answer: 'a. 그런가보다...하고 흐린눈' ,type: [1, 2, 3, 4, 5, 8, 10, 1]},
            { answer: 'b. 친구나 가족에게 이야기하고 싶어.' ,type: [0, 6, 7, 9, 11, 12, 13, 14]}
        ]
    },
    {
        q: '7. 논쟁이나 갈등을 피하는 편인가요?',
        a: [
            { answer: 'a. 논쟁은 되도록 피하고 싶어.' ,type: [2, 4, 6, 7, 8, 9, 10, 14]},
            { answer: 'b. 논쟁도 어느 정도 필요하지 않을까?' ,type: [0, 1, 3, 5, 11, 12, 13, 15]}
        ]
    },
    {
        q: '8. 미래에 대한 계획을 자세히 세우는 편인가요?',
        a: [
            { answer: 'a. 미래 계획을 열심히 세우려고 해.' ,type: [1, 2, 3, 4, 5, 8, 10, 15]},
            { answer: 'b. 현재를 즐기는 게 더 중요해.',type: [0, 6, 7, 9, 11, 12, 13, 14] }
        ]
    },
    {
        q: '9. 새로운 경험을 시도하는 것을 좋아하나요?',
        a: [
            { answer: 'a. 새로운 것에 도전하는 걸 좋아해!',type: [0, 1, 3, 5, 11, 12, 13, 15] },
            { answer: 'b. 익숙한 게 더 편하고 좋아.',type: [2, 4, 6, 7, 8, 9, 10, 14 ] }
        ]
    },
    {
        q: '10. 새로운 사람들을 만나고 소셜 이벤트에 참석하는 걸 좋아하나요?',
        a: [
            { answer: 'a. 사람들과 만나는 걸 즐기는 편!' ,type: [0, 1, 5, 6, 8, 10, 13, 14]},
            { answer: 'b. 조용하게 혼자 있는 게 좋아.',type: [2, 3, 4, 7, 9, 11, 12, 15] }
        ]
    },
    {
        q: '11. 계획된 일정을 따르는 것을 중요하게 여기나요?',
        a: [
            { answer: 'a. 계획을 최대한 지키려고 노력해!' ,type: [1, 4, 6, 9, 10, 12, 13, 15]},
            { answer: 'b. 계획이 유연하게 변해도 괜찮아.' ,type: [0, 2, 3, 5, 7, 8, 11, 14 ]}
        ]
    },
    {
        q: '12. 결정을 내릴 때 감정보다 논리를 더 중요하게 생각한다.',
        a: [
            { answer: 'a. 아니, 내 마음이 가는대로' ,type: [0, 6, 7, 9, 11, 12, 13, 14]},
            { answer: 'b. 응, 논리대로',type: [1, 2, 3, 4, 5, 8, 10, 15] }
        ]
    },
    {
        q: '13. 계획을 세우고 목표를 가지고 살아가는 것이 나에게 더 나은 것 같다.',
        a: [
            { answer: 'a. 그렇게 생각한다.',type: [1, 4, 6, 9, 10, 12, 13,  15] },
            { answer: 'b. 별로 그렇지 않다.',type: [0, 2, 3, 5, 7, 8, 11, 14 ] }
        ]
    },
    {
        q: '14. 새로운 아이디어를 떠올리는 것이 쉽다.',
        a: [
            { answer: 'a. 아이디어가 많은 편' ,type: [0, 1, 3, 5, 11, 12, 13, 15]},
            { answer: 'b. 딱히',type: [2, 4, 6, 7, 8, 9, 10, 14 ] }
        ]
    },
    {
        q: '15. 다른 사람이 나에 대한 안좋은 이야기를 한걸 들었다면?',
        a: [
            { answer: 'a. 내가 뭘 잘못했나?' ,type: [0, 6, 7, 9, 11, 12, 13, 14]},
            { answer: 'b. 나를? 왜지' ,type: [1, 2, 3, 4, 5, 8, 10, 15]}
        ]
    },
    {
        q: '16. 둘 중에 들었을 때 더 좋은 말은?',
        a: [
            { answer: 'a. 넌 나에게 소중해' ,type: [0, 6, 7, 9, 11, 12, 13, 14]},
            { answer: 'b. 너한테 많이 배운다',type: [1, 2, 3, 4, 5, 8, 10, 15] }
        ]
    }
];


const infoList = [
    {
        name: '즐거움 만땅 <말티즈, 아메리칸 숏헤어>',
        desc: '자유분방하고 다채로운 당신! 주변에서는 즐겁고 활기찬 에너지를 가진 사람으로 보이지만, 속으로는 논리적이고 분석적인 사고를 가지고 있습니다. 호기심이 많아 새로운 경험을 추구하고, 사람들과의 교류에서 기쁨을 느낍니다. 그러나 때로는 깊이 있는 관계를 형성하는 데 어려움을 느낄 수 있으므로, 마음의 평온과 깊이 있는 소통을 위한 노력이 법을 연구해보세요! '
    },
    {
        name: '대담한 지도자 <골든 리트리버, 봄베이>',
        desc: '대담하고 분석적인 리더십을 가진 당신! 목표 달성을 위해 체계적인 계획과 조직을 선호하며, 자신의 비전을 추구하는 데 열정적입니다. 강한 의지력과 독립성을 바탕으로 목표를 추구하며, 리더십과 결정력을 발휘하는 특징을 보입니다. 때로는 과도한 완벽주의나 강박적인 특성이 드러날 수 있습니다. 이를 극복하고 효율적인 조화롭고 성공적인 리더십 스타일을 발전시키는 방법을 고민해보세요! '
    },
    {
        name: '독립적인 탐험가 <시바견, 스핑크스>',
        desc: '독립적이고 용감한 당신! 자유롭고 독립적인 성향을 가지고 있으며, 새로운 도전과 탐험을 즐깁니다. 혼자만의 시간을 중요시하며 내면의 깊은 생각을 추구합니다. 그러나 때로는 과도한 독립심으로 타인과의 교류를 피하거나 감정적인 거리를 둘 수 있으므로, 오히려 타인과 소통하고 나눔을 통해 성장하는 방법을 고민해보세요! '
    },
    {
        name: '논리적인 분석가 <비숑 프리제, 터키시앙고라>',
        desc: '논리적이고 분석적인 당신! 논리적인 사고와 분석력을 가지고 있으며, 문제를 해결하는 데 뛰어납니다. 항상 이성과 감정을 균형 있게 고려하려고 노력하며, 현실적이고 체계적인 접근을 선호합니다. 그러나 때로는 감정을 표현하는 데 어려움을 느끼거나 타인의 감정을 이해하기 어려울 수 있으므로, 감정적인 연결을 강화하는 방법을 고민해보세요! '
    },
    {
        name: '완벽주의자 <푸들, 이집션마우>',
        desc: '완벽주의적이고 체계적인 당신! 주로 계획을 세우고 목표를 추구하는 성향을 가지며, 꼼꼼한 성격으로 주변 사람들을 신뢰하게 만듭니다. 뛰어난 조직력과 계획력을 가지고 있으며, 주어진 일을 정확하게 처리하는 데 능숙합니다. 그러나 때로는 자신의 기준을 다른 사람에게 강요할 수 있으므로 유연성을 유지하며 타인의 의견을 고려하는 방법을 배워보세요! '
    },
    {
        name: '창의적인 발명가 <보더 콜리, 컬러포인트 숏헤어>',
        desc: '창의적이며 독창적인 당신! 주로 새로운 아이디어와 해결책을 찾는 것을 즐기는 성향을 가지며, 혁신적인 사고를 지니고 있습니다. 문제 상황에서 창의적인 방법으로 대처하며, 자신만의 영감을 살려 일을 추진합니다. 그러나 때로는 현실적인 제약을 간과하여 비현실적인 아이디어에 시간을 허비할 수 있으므로 실행 가능한 계획을 수립하는 방법을 배워보세요! '
    },
    {
        name: '사회적 리더 <프렌치 불독, 시베리아 고양이>',
        desc: '사회적이고 리더십을 갖춘 당신! 주로 타인과의 관계에서 지도력을 발휘하며, 팀을 이끄는 데 능숙한 성향을 가지고 있습니다. 타인을 도와주고 지원하는 것을 좋아하며, 자신의 목표를 달성하는 데 있어 동기부여 역할을 하기도 합니다. 그러나 때로는 과도한 책임감으로 스트레스를 받을 수 있으므로 자신을 돌보는 방법을 익혀보세요! '
    },
    {
        name: '감성적인 예술가 <샤페이, 랙돌>',
        desc: '감성적이고 예술적인 당신! 주로 감정 표현이 풍부하며 창의적인 성향을 가지고 있어 예술과 창작 활동을 즐깁니다. 주변에서 따뜻한 마음으로 인정받으며, 자유분방한 자신을 솔직하게 표현하는 데 능숙합니다. 그러나 때로는 감정에 휘둘려 결정을 내릴 때 신중하지 못할 수 있으므로 논리적 판단력을 강화하는 방법을 익혀보세요! '
    },
    {
        name: '자발적인 탐험가 <셰퍼드, 통키니즈>',
        desc: '자발적이며 탐험적인 당신! 주로 독립심이 강하고 자유로운 활동을 즐기는 성향을 가지며, 새로운 도전과 경험을 추구합니다. 뛰어난 관찰력과 문제해결 능력을 가지고 있으며, 주변 사람들을 도와주는 것을 좋아합니다. 그러나 때로는 불안정한 상황에서 자신의 감정을 표현하는 데 어려움을 겪을 수 있으므로 감정 표현을 연습해보세요! '
    },
    {
        name: '성실한 협력자 <웰시코기, 스코티시폴드>',
        desc: '성실하고 조화로운 당신! 주로 신중하고 책임감이 강한 성향을 가지고 있으며, 협력을 중요하게 생각하는 타입입니다. 주변과의 조화를 중시하며 성실하게 일을 처리하는 데 능숙합니다. 그러나 때로는 과도한 조정을 통해 자신의 의견을 희생할 수 있어 주의가 필요합니다. 자신의 필요와 의견을 효과적으로 표현하며, 타인과의 균형 있는 관계를 유지하는 방법을 배워보세요! '
    },
    {
        name: '용기 있는 도전가 <도베르만, 노르웨이 숲>',
        desc: '용기 있고 도전적인 당신! 주로 결단력 있고 도전을 두려워하지 않는 성향을 가지며, 자신의 목표를 추구하는 데 있어서 대담하게 나서는 모습을 보입니다. 뛰어난 리더십과 자신감을 가지고 있으며, 어려운 상황에서도 냉정하게 대처할 수 있습니다. 그러나 때로는 과도한 독립심으로 인해 협력을 소홀히 할 수 있으므로 타인과의 협력을 중요하게 생각하는 방법을 배워보세요! '
    },
    {
        name: '민감한 중재자 <알래스칸 말라뮤트, 러시안블루>',
        desc: '민감하고 중재적인 성격을 가진 당신! 감성 표현이 풍부하며 창의적인 성향으로 예술과 창작 활동을 즐깁니다. 따뜻한 마음으로 주변 사람들과 인정받는 편이며, 자유분방한 모습을 솔직하게 표현하는 능력이 있습니다. 그러나 감정에 휘둘려 결정을 내릴 때 신중하지 못할 때가 있을 수 있습니다. 논리적 판단력을 키우고 현실적인 측면을 고려하는 방법을 연구해보세요! '
    },
    {
        name: '통찰적인 조언자 <사모예드, 라가머핀>',
        desc: '통찰적이고 조언을 잘해주는 당신! 주로 타인의 감정을 이해하며, 사람들 사이에서 조화와 평화를 중요하게 생각합니다. 신념이 깊고 가치관에 따라 행동하며, 타인의 성장을 도모하는 데 관심을 두는 특성을 가지고 있습니다. 가치관과 이상을 중요시하면서도 때로는 불확실한 상황에서 불안을 느낄 수 있으므로 효과적인 의사소통과 대인관계 기술을 개발하여 조화롭게 대처하는 방법을 익혀보세요! '
    },
    {
        name: '열정적인 리더 <포메라니안, 샴>',
        desc: '열정적이고 리더십을 발휘하는 당신!  주변 사람들과의 유대 관계를 중요하게 생각하며, 타인을 도울 때 큰 만족감을 느낍니다. 사회적 변화를 위해 행동하고 다양한 역할을 맡는 것을 즐깁니다. 자신의 목표와 가치에 충실하면서도 때로는 과도한 완벽주의나 부담을 느낄 수 있습니다. 이러한 특성을 관리하면서 더 나은 조화롭고 효과적인 리더십 스타일을 발전시키는 법을 익혀보세요! '
    },
    {
        name: '자유로운 영혼 <코카 스패니얼, 브리티시 숏헤어>',
        desc: '활동적이고 자유로운 영혼을 가진 당신! 사람과 활동에 관심을 가지며, 현재 순간을 즐기고 경험하기 위해 노력하는 자유로운 영혼을 가진 사람입니다. 다양한 활동과 사람들과의 교류를 통해 자신을 표현하며, 즉흥적이고 긍정적인 성향을 보입니다. 주변 사람들을 환영하며 공감능력을 발휘합니다. 때로는 감정적으로 변덕스럽거나 현실적인 문제에 민감하게 반응할 수 있습니다. 이를 극복하고 자신의 긍정적인 에너지와 재능을 활용하여 활동하는 법을 연구해보세요! '
    },
    {
        name: '논리적인 전략가 <허스키, 소말리>',
        desc: '논리적이고 전략적인 사고를 가진 당신! 지적 호기심과 혁신적인 아이디어를 중요하게 여기는 특징을 가지고 있습니다. 뛰어난 분석력과 조직력을 바탕으로 목표를 달성하기 위해 계획을 세우고 실행하는 능력을 지니며, 목표 달성에 대한 열정과 결단력을 보입니다. 때로는 자신의 아이디어와 목표에 대해 너무 깊이 생각하거나 완벽주의적인 경향이 있습니다. 이를 극복하고 유연성을 유지하며 다양한 시각을 수용하는 법을 고민해보세요! ',
    }
]