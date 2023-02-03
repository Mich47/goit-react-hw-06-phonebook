import styled from 'styled-components';
import { space, typography } from 'styled-system';

export const TitleStyled = styled.h1`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.gray};
  /* text-transform: capitalize; */
  text-align: center;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const TextStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: 0;
`;

export const ButtonStyled = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  ${typography}
  ${space}

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LabelStyled = styled.label`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const InputStyled = styled.input`
  padding: 8px;
  font-size: ${p => p.theme.fontSizes.s};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.primary};
  outline-color: ${p => p.theme.colors.primary};
`;

export const ContactsListStyled = styled.ul`
  font-family: ${p => p.theme.fonts.body};
  margin-top: 8px;
  margin-bottom: 0;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
`;

export const ContactsItemStyled = styled.li`
  padding: 8px 8px 8px 0;
  margin-left: 8px;
`;
