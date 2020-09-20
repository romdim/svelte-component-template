<script lang="ts">
  export let name: string;
  export let buttonText: string = "Button";
  const handleClick = () => {
    buttonText += " Clicked";
  }
</script>

<!-- your code here -->
<h1>Hello {name}!</h1>

<button on:click={handleClick}>{buttonText}</button>
