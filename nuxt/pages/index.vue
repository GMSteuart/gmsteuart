<template>
  <!--Container-->
  <div class="container w-full md:max-w-md mx-auto pt-20">
    <div class="w-full px-4 md:px-6 text-xl text-grey-darkest leading-normal">
      <!--Title-->
      <div class="font-sans">
        <span
          class="text-base md:text-sm text-teal font-bold"
          style="font-family: AbitareSans100"
        ><-</span>
        <span>
          <a
            href="#"
            class="text-base md:text-sm text-teal font-bold no-underline hover:underline"
            style="font-family: AbitareSans100"
          >BACK TO BLOG</a>
        </span>
        <h1
          class="font-sans break-normal text-black pt-6 pb-2 text-3xl md:text-4xl"
        >Welcome to Minimal Blog</h1>
        <p class="text-sm md:text-base font-normal text-grey-dark">Published 19 February 2019</p>
      </div>
      <!--Post Content-->
      <!--Lead Para-->
      <p class="py-6">
        👋 Welcome fellow
        <a
          class="text-teal no-underline hover:underline"
          href="https://www.tailwindcss.com"
        >Tailwind CSS</a> and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
      </p>

      <p
        class="py-6"
      >The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>

      <base-heading></base-heading>

      <p class="py-6">
        Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
        purus, in mattis tortor sollicitudin pretium. Phasellus at diam
        posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
        pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
        condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
        turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
        rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
        molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
        molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
        risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
        eget sem dictum elementum.
      </p>
      <ol>
        <li class="py-3">
          Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero
          lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper
          venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam,
          commodo sit amet placerat in, interdum a ipsum. Morbi sit amet
          tellus scelerisque tortor semper posuere.
        </li>
        <li
          class="py-3"
        >Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
        <li
          class="py-3"
        >Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
      </ol>
      <base-blockquote></base-blockquote>
      <p class="py-6">Example code block:</p>
      <base-code></base-code>
      <!--/ Post Content-->
    </div>

    <!--Tags -->
    <div class="text-base md:text-sm text-grey px-4 py-6">
      Tags:
      <a href="#" class="text-base md:text-sm text-teal no-underline hover:underline">Link</a> .
      <a href="#" class="text-base md:text-sm text-teal no-underline hover:underline">Link</a>
    </div>

    <!--Divider-->
    <hr class="border-b-2 border-grey-light mb-8 mx-4">

    <!--Subscribe-->
    <div class="container px-4">
      <div class="font-sans bg-white rounded-lg shadow-md p-4 text-center">
        <h2 class="break-normal text-xl md:text-3xl">Subscribe to my Newsletter</h2>
        <h3
          class="break-normal font-normal text-grey-dark text-sm md:text-base"
        >Get the latest posts delivered right to your inbox</h3>
        <div class="w-full text-center pt-4">
          <form action="#">
            <div class="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
              <input
                type="email"
                placeholder="youremail@example.com"
                class="flex-1 mt-4 appearance-none border border-grey-light rounded shadow-md p-3 text-grey-dark mr-2 focus:outline-none"
              >
              <button
                type="submit"
                class="flex-1 mt-4 block md:inline-block appearance-none bg-teal text-white text-base font-semibold tracking-wide uppercase py-4 rounded shadow hover:bg-teal-light"
              >Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- /Subscribe-->

    <!--Author-->
    <div class="flex w-full items-center font-sans px-4 py-12">
      <img
        class="w-10 h-10 rounded-full mr-4"
        src="http://i.pravatar.cc/300"
        alt="Avatar of Author"
      >
      <div class="flex-1 px-2">
        <p class="text-base font-bold text-base md:text-xl leading-none mb-2">Jo Bloggerson</p>
        <p class="text-grey-dark text-xs md:text-base">
          Minimal Blog Tailwind CSS template by
          <a
            class="text-teal no-underline hover:underline"
            href="https://www.tailwindtoolbox.com"
          >TailwindToolbox.com</a>
        </p>
      </div>
      <div class="justify-end">
        <button
          class="bg-transparent border border-grey hover:border-teal text-xs text-grey hover:text-teal font-bold py-2 px-4 rounded-full"
        >Read More</button>
      </div>
    </div>
    <!--/Author-->

    <!--Divider-->
    <hr class="border-b-2 border-grey-light mb-8 mx-4">

    <!--Next & Prev Links-->
    <div class="font-sans flex justify-between content-center px-4 pb-12">
      <div class="text-left">
        <span class="text-xs md:text-sm font-normal text-grey-dark">&lt; Previous Post</span>
        <br>
        <p>
          <a
            href="#"
            class="break-normal text-base md:text-sm text-teal font-bold no-underline hover:underline"
          >Blog title</a>
        </p>
      </div>
      <div class="text-right">
        <span class="text-xs md:text-sm font-normal text-grey-dark">Next Post &gt;</span>
        <br>
        <p>
          <a
            href="#"
            class="break-normal text-base md:text-sm text-teal font-bold no-underline hover:underline"
          >Blog title</a>
        </p>
      </div>
    </div>
    <!--/Next & Prev Links-->
  </div>
  <!--/container-->
</template>

<script>
import BaseBlockquote from '@/components/BaseBlockquote'
import BaseCode from '@/components/BaseCode'
import BaseHeading from '@/components/BaseHeading'
export default {
  components: {
    BaseBlockquote,
    BaseCode,
    BaseHeading
  }
}
</script>

<style>
</style>
