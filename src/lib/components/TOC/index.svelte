<script>
  import orderDocs from './orderDocs';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  export let docs;

  let showMobileMenu = false;
  let scrollContainer;

  $: [groupedDocs, groupOrder] = orderDocs(docs, $page.url.pathname);

  const scrollTop = () => {
    scrollContainer.scrollTop = 0;
  };

  afterNavigate(scrollTop);
</script>

<div class="page-container">
  <div class="page-menu" class:active-mobile="{showMobileMenu}">
    <button
      class:active="{showMobileMenu}"
      on:click="{() => {
        showMobileMenu = !showMobileMenu;
      }}"
    >
      <Fa fw icon="{faBars}" />
    </button>
    <ul class="home">
      <li class:active="{$page.url.pathname === '/'}">
        <a href="{`${base}/`}"><Fa fw icon="{faHome}" /> Home</a>
      </li>
    </ul>
    {#each groupOrder as group}
      {#if group}
        <h5>{group.replace('_', ' ')}</h5>
      {/if}
      <ul>
        {#each groupedDocs[group] as doc}
          <li class:active="{doc.isActive}">
            <a href="{`${base}/${doc.slug}`}">{doc.title}</a>
          </li>
        {/each}
      </ul>
    {/each}
  </div>
  <div class="page-content" bind:this="{scrollContainer}">
    <slot />
  </div>
</div>

<style lang="scss">
  @import '~@reuters-graphics/style-main/scss/fonts/mixins';
  @import '~@reuters-graphics/style-color/scss/thematic/brand';

  $mobile-break: 975px;

  div.page-container {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    div.page-menu {
      position: relative;
      flex-basis: 18rem;
      flex-grow: 1;
      border-right: 1px solid #ddd;
      padding: 1.5rem 15px 1.5rem 15px;
      transition: all 0.3s ease-in-out;
      max-height: calc(100vh - 49px);
      overflow-y: scroll;
      @media (max-width: $mobile-break) {
        position: fixed;
        width: 400px;
        left: -400px;
        top: 51px;
        height: calc(100vh - 51px);
        z-index: 9;
        background-color: white;

        @media (max-width: 450px) {
          width: 300px;
          left: -300px;
        }
        &.active-mobile {
          left: 0;
        }
      }
      button {
        position: fixed;
        top: 54px;
        left: 5px;
        border: 1px solid #ccc;
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        color: #999;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.14);
        transition: all 0.3s ease-in-out;
        &.active {
          left: 375px;
          @media (max-width: 450px) {
            left: 275px;
          }
        }
        @media (max-width: $mobile-break) {
          display: flex;
        }
      }
      h5 {
        text-transform: uppercase;
        font-weight: 200;
        font-size: 0.85rem;
        letter-spacing: 1px;
        color: #999;
        margin: 1.75rem 0 0.25rem 0;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
        text-overflow: ellipsis;
      }
      ul {
        @include font-sans;
        font-weight: 200;
        margin: 0 0 1rem;
        padding: 0;
        list-style-type: none;
        li {
          font-size: 1.1rem;
          line-height: 1.25rem;
          margin: 0.5rem 0;
          padding: 0.2rem 0 0.1rem;

          a {
            color: #333;
            &:hover {
              text-decoration: none;
            }
          }
          &.active {
            border-left: 5px solid $brand;
            padding-left: 5px;
            margin-left: -10px;
          }
        }
      }
    }
    div.page-content {
      flex-basis: 0;
      flex-grow: 999;
      max-height: calc(100vh - 49px);
      overflow-y: scroll;
    }
  }
</style>
