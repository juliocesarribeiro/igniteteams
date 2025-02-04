
import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackButton, BackIcon } from './styles';
import LogoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}
export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoGroups() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoGroups}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={LogoImg} />
    </Container>
  );
}