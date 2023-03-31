export const getInvitationTypes = () => {
  const invitationTypes = ['캐주얼한 약속', '기념 파티', '대결'];

  return invitationTypes;
};

export const getInvitationDetailTypes = (type: number) => {
  const invitationDetailTypes = [
    ['밥 약속', '술 약속', '소풍', '여행'],
    ['생일', '집들이', '졸업 / 취뽀', '이직 / 퇴사'],
    ['같이 게임하기', '결투 신청']
  ];

  return invitationDetailTypes[type];
};
