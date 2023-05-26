import { RestAside, RestLink, RestTitle } from './RestList.styled';

export const RestList = ({ restNames }) => {
  return (
    <RestAside>
      <RestTitle>Shops:</RestTitle>
      {restNames.map(name => (
        <RestLink key={name} to={`${name}`}>
          {name}
        </RestLink>
      ))}
    </RestAside>
  );
};
