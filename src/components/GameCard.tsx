import { Card, CardBody, Heading, HStack, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
        <Link
            as={RouterLink}
            to={`/games/${game.slug}`}
            textDecoration="underline"
            _hover={{ color: "gray.300" }}
            cursor="pointer"
          >
            {game.name}
          </Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
