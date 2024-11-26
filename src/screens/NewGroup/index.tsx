import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Highlight } from '@components/Highlight';

import {
  Container,
  Content,
  Icon,
} from './styles';
import { Alert } from 'react-native';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        Alert.alert('Novo Grupo', 'Por favor, preencha o nome da turma');
        return;
      }

      await groupCreate(group)
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Ocorreu um erro inesperado');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          onPress={handleNew}
        />
      </Content>

    </Container>
  );
}