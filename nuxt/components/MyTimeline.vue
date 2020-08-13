<template>
  <v-timeline dense>
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      small
      fill-dot
      color="grey"
    >
      <template v-slot:opposite>
        <span class="headline font-weight-bold"></span>
      </template>
      <v-card>
        <v-card-text class="text-overline pb-0">{{ item.title }}</v-card-text>
        <v-card-title class="headline py-0">{{
          item.company.name
        }}</v-card-title>
        <v-card-text class="text-subtitle-2 font-weight-light py-0 my-0"
          >{{ item.start }} - {{ item.end }}</v-card-text
        >
        <v-card-text class="text-body-1 mt-0">
          {{ item.description }}
        </v-card-text>

        <v-card flat class="d-flex flex-column">
          <v-card-text
            class="text-subtitle-1 text-uppercase font-weight-bold pb-0 pl-5"
            >Tools</v-card-text
          >
          <v-card-text class="d-flex flex-row pt-0">
            <v-card v-for="(tool, t) in item.tools" :key="t" flat class="pa-2">
              {{ tool }}
            </v-card>
          </v-card-text>
        </v-card>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          start: 'March 2020',
          end: 'May 2020',
          company: {
            name: 'Mizzou',
            website: ''
          },
          title: 'Web Developer',
          location: 'Remote',
          description: `Refactored 16 University of Missouri websites from dynamically generated PHP websites to
static websites for hosting on AWS S3. Replaced email processing on the backend with a custom frontend JavaScript form
handler. Tested websites locally using Docker with LocalStack and a web crawler with additional scripting to verify
every page loaded all assets (e.g. CSS, JS, images, etc) to ensure successful deployments.`,
          websites: [
            'https://andes.missouri.edu',
            'https://archaeometry.missouri.edu',
            'https://cambiodecolores.missouri.edu',
            'https://cisp.ece.missouri.edu',
            'https://far.missouri.edu',
            'https://vozlatina.missouri.edu',
            'https://acg.missouri.edu',
            'https://americas.missouri.edu',
            'https://anatomy.missouri.edu',
            'https://fabrica.missouri.edu',
            'https://cambio.missouri.edu',
            'https://wakonse.org',
            'https://sfa.missouri.edu',
            'https://newagain.missouri.edu',
            'https://celdi.missouri.edu',
            'https://younggroup.missouri.edu'
          ],
          tools: [
            'AWS S3',
            'Docker',
            'Lando',
            'Box',
            'Node.js',
            'Cisco VPN',
            'Apache'
          ],
          languages: [
            'PHP',
            'JavaScript',
            'HTML',
            'HTML5',
            'CSS',
            'CSS3',
            'Bash',
            'RegExp'
          ]
        },
        {
          start: 'February 2017',
          end: 'November 2019',
          company: {
            name: 'VMLY&R',
            website: ''
          },
          title: 'Web Developer',
          location: 'Kansas City, Missouri',
          description: `Developer on many Drupal 8 websites with varying team sizes, project scopes, and role
responsibilities.`,
          teams: [
            {
              company: 'United Rentals',
              website: 'https://www.unitedrentals.com',
              size: '25-40',
              description: `Primary focus was being personally responsible for developing and architecting the initial
location finder. The location finder required pull location data from United Rental's interal API and then mapping over
1000 locations on a Google Map in an efficient manner while providing IE 11 support. Developed an events pipeline for
the shopping experience that integrated with Google Analytics.`,
              length: '~10 months',
              tools: [
                'Drupal 8',
                'Docker',
                'Docksal',
                'Google Maps',
                'Google Analytics',
                'Jenkins',
                'Acquia Cloud',
                'Vue.js'
              ]
            },
            {
              company: 'Tyson Foods',
              website: 'https://www.ballparkbrand.com',
              size: '< 10',
              description: `Primary developer on the Ball Park Brand responsible for content architecture, local
development environment structure, and frontend component development.`,
              length: '~1 month',
              tools: ['jQuery']
            },
            {
              company: 'Tyson Foods',
              website: 'https://www.tysonfoodservice.com',
              size: '< 10',
              description: ``,
              length: '~1 month'
            },
            {
              company: 'Tyson Foods',
              website: 'https://www.localgrainservices.com',
              size: '< 10',
              description: ``,
              length: '~2 months'
            },
            {
              company: 'Wendys',
              website: 'https://www.wendys.com',
              size: 'Huge',
              description: `Fixed a bug when selecting a location from Wendy's location finder when using Safari on iOS.`,
              length: '1 day'
            },
            {
              company: 'Spire Inc.',
              website: 'https://spireenergy.com',
              size: 'Huge',
              description: `Investigated the source of an overcalled Google API endpoint.`,
              length: '~2 days'
            },
            {
              company: 'ArcBest',
              website: 'https://www.upack.com',
              size: '10-15',
              description: `Primarily responsible for architecting the frontend for the redesigned U-pack website.`,
              length: '~10 months'
            }
          ],
          tools: [
            'Lando',
            'Docksal',
            'Drupal',
            'Acquia Cloud',
            'Google Maps',
            'Google Analytics',
            'Docker',
            'Docker Compose',
            'jQuery',
            'Vue',
            'Apache'
          ],
          languages: []
        },
        {
          start: 'June 2014',
          end: 'December 2017',
          company: {
            name: 'Protocall',
            website: ''
          },
          title: 'Lead Developer',
          location: 'Remote',
          description: `Lead full stack developer on an inmate and call management web application for correctional
facilities. Designed entirely new front end and architected a new back end while maintaining backwards compatibility
with existing database structures. Optimized database increasing speed and efficiency while reducing size across
millions of records. Responsible for all development for the first two and a half years until I accepted a salary cut to
hire an acquintance as a web developer. Ultimately, led development until the startup was bought out.`,
          tools: [
            'CakePHP',
            'Vue.js',
            'Ext.js',
            'Docker',
            'Apache',
            'MySQL',
            'WebSockets'
          ],
          languages: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
          apis: ['WhitePages', 'Google Maps']
        },
        {
          start: 'September 2013',
          end: 'May 2014',
          company: {
            name: 'Center for Research on Learning',
            website: ''
          },
          title: 'Web Developer',
          location: 'Lawrence, Kansas',
          description: `Developed websites for Center of Research on Learning at KU. All websites were developed and
put on a LAMP stack. Implemented a small student management system for KS ATBS. Created a custom survey plugin for the
Research Collaboration site. Maintained, fixed bugs, and made updates to the MO SPDG data site. Managed servers for
sites and resolved any errors that occurred.`,
          tools: [
            'CakePHP',
            'Croogo',
            'jQuery',
            'Bootstrap',
            'SASS',
            'MySQL',
            'Moodle'
          ],
          languages: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
          apis: ['Google Graphs']
        }
      ]
    }
  }
}
</script>
