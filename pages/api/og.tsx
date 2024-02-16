import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default async function handler() {
  const interSemiBoldFontData = await fetch(
    new URL('../../public/assets/InterDisplay-SemiBold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const interBlackFontData = await fetch(
    new URL('../../public/assets/InterDisplay-Black.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    backgroundColor: '#0d0d0d',
    backgroundImage: 'radial-gradient(circle at 25px 25px, #333 3%, transparent 0%), radial-gradient(circle at 75px 75px, #333 3%, transparent 0%)',
    backgroundSize: '100px 100px',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute', 
      top: 0,
      bottom: 0,

    }}
  >
    <svg
      viewBox="0 0 1200 630"
      fill="white"
    >
      <path d="M465,340.5v-200h200c55.23,0,100,44.77,100,100s-44.77,100-100,100h-100v-25h100c41.42,0,75-33.58,75-75s-33.58-75-75-75h-175v175h-25Z"/>
      <path d="M665,190.5h-150v150h25v-50h125c27.61,0,50-22.39,50-50s-22.39-50-50-50ZM665,265.5h-125v-50h125c13.81,0,25,11.19,25,25s-11.19,25-25,25Z"/>
    </svg>
  </div>
  <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', width: "auto"}}>
    
      <b style={{
        fontSize: 80,
        color: 'white',
        marginInline: "auto",
        fontFamily: "InterBlack",
        whiteSpace: 'pre-wrap',
        marginTop: 250
      }}>Damián Ponce
      </b>

      <b style={{
        fontSize: 30,
        fontWeight: 300,
        fontFamily: "InterSemiBold",
        color: 'white',
      }}>Developer and Engineering student</b>
  </div>
</div>

    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'InterSemiBold',
          data: interSemiBoldFontData,
          style: 'normal',
        },{
          name: 'InterBlack',
          data: interBlackFontData,
          style: 'normal',
        },
      ],
    },
  );
}