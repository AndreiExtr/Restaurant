<template>
  <svg class="back-icon" width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15.5" transform="rotate(180 16 16)" stroke="#FFA500"/>
    <g clip-path="url(#clip0_0_127)">
    <path d="M14.6514 13.0469C14.7868 12.9115 14.9998 12.9115 15.1352 13.0469C15.2659 13.1776 15.2659 13.3953 15.1352 13.5258L12.6823 15.9786H20.7765C20.9652 15.9786 21.12 16.1286 21.12 16.3173C21.12 16.506 20.9652 16.6608 20.7765 16.6608H12.6823L15.1352 19.1091C15.2659 19.2445 15.2659 19.4624 15.1352 19.5929C14.9998 19.7282 14.7868 19.7282 14.6514 19.5929L11.6179 16.5593C11.4871 16.4286 11.4871 16.2109 11.6179 16.0804L14.6514 13.0469Z" fill="#FFA500"/>
    </g>
    <defs>
      <clipPath id="clip0_0_127">
        <rect width="9.6" height="9.6" fill="white" transform="translate(11.52 11.52)"/>
      </clipPath>
    </defs>
</svg>
</template>

<script>
export default {
  name: 'BackIcon',
  components: {},
  props: {}
}
</script>

<style lang="scss" scoped>
.back-icon {
  width: 40px;
  height: 40px;
  transition: fill 0.2s ease, stroke 0.2s ease;
  cursor: pointer;

    circle, path {
    transition: stroke 0.2s ease;
  }

  &:hover circle {
    fill: #FFA500;
    stroke: none;
  }

  &:hover path {
    fill: #ffffff;
  }
}
</style>
