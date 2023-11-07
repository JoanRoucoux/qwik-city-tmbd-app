import { component$ } from '@builder.io/qwik';
import type { Comic } from '~/services/types';
import { getThumbnail } from '~/utils/image';
import { paths } from '~/utils/paths';

type Props = {
  media: Comic;
  clickable?: boolean;
};

export const ComicHero = component$((props: Props) => (
  <section class="bg-base-200 mt-8">
    <div class="flex items-center">
      <div class="w-1/3 p-8">
        <img
          width={560}
          height={865}
          alt={props.media.title || ''}
          src={getThumbnail(props.media.thumbnail)}
          class="w-full h-auto m-0 object-cover object-top"
        />
      </div>
      <div class="w-2/3 p-8">
        <h1 class="text-5xl mt-0 mb-4">{props.media.title}</h1>
        <h2 class="text-2xl text-primary">{`From the ${props.media.series?.name} series`}</h2>
        {props.media.description && (
          <p class="my-4">{props.media.description}</p>
        )}
        {props.clickable && (
          <a
            href={paths.media('comic', props.media.id)}
            class="btn btn-wide btn-primary mt-8"
          >
            See more
          </a>
        )}
      </div>
    </div>
  </section>
));
