import Particles from
"react-tsparticles";

export default function
ParticleBackground() {

  return (

    <Particles
      options={{

        particles:{
          number:{
            value:70
          },

          color:{
            value:"#D4AF37"
          },

          move:{
            enable:true,
            speed:1
          },

          links:{
            enable:true,
            color:"#D4AF37"
          }
        }
      }}
    />

  );
}