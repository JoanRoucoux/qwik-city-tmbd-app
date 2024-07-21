import { component$ } from '@builder.io/qwik';
import type { Media } from '~/services/types';
import { getThumbnail } from '~/utils/image';
import { paths } from '~/utils/paths';
import { getHeading, getMediaType } from './MediaCard.utils';

type Props = {
  media: Media;
};

export const MediaCard = component$((props: Props) => {
  const mediaType = getMediaType(props.media);
  const heading = getHeading(props.media);

  return (
    <a href={paths.media(mediaType, props.media.id)} class="bg-base-200 w-48 overflow-hidden">
      <div class="hover:scale-105 transition duration-300">
        <img
          alt={heading}
          width={192}
          height={288}
          class="object-cover object-top w-48 h-72"
          src={getThumbnail(props.media.thumbnail)}
        />
      </div>
      <p class="py-4 px-2 font-bold">{heading}</p>
    </a>
  );
});
