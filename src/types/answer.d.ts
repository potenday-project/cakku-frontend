interface AnswerType {
  userName: string;
  invitationType: number;
  invitationDetailType: number;
  invitationTitle: string;
  cardTemplateItems: number[];
  invitationDate?: Date | string;
  invitationTime?: string;
  invitationPlace?: string;
  cardContent?: string;
}
