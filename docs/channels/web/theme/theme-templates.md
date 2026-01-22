---
title: 'Theme Templates & Custom CSS'
---

# Theme Templates & Custom CSS

Theme templates provide ready-made designs you can apply with one click. For more advanced customization, you can add your own CSS on top.

## Theme Templates

Before diving into custom CSS, you can get started quickly with our pre-designed theme templates. The Theme section includes a **Theme Templates** accordion that provides 10 professionally designed themes you can apply instantly.

### Using theme templates

1. Navigate to your agent's **Theme** page.
2. Expand the **Theme Templates** accordion (the first section).
3. Browse through the available themes:
   - **Modern Corporate** – Clean, professional design for business websites.
   - **Gaming Console** – Dark theme with neon accents for gaming sites.
   - **Medical Healthcare** – Trustworthy design for healthcare applications.
   - **E-commerce Shopping** – Vibrant, conversion-focused design for online stores.
   - **Educational Platform** – Knowledge-focused design for learning platforms.
   - **Vintage Paper** – Nostalgic, classic design inspired by vintage documents.
   - **Futuristic Hologram** – Sci-fi design with holographic effects.
   - **Nature Forest** – Peaceful, organic design with earth tones.
   - **Social Media** – Modern, trendy design inspired by social platforms.
   - **Comic Book** – Bold, playful design inspired by graphic novels.
4. Click on any theme to instantly apply it to your chatbot.
5. The theme automatically updates both the custom CSS and bubble colors.

### Reset functionality

- Use the **Reset** button (🔄) at the top of the Theme Templates section to revert back to your saved theme settings.
- This is helpful when you want to undo template changes and return to your original customizations.

### Theme template benefits

- **Instant application** – No need to write CSS code.
- **Professional designs** – Each theme is crafted for specific use cases.
- **Color coordination** – Bubble colors are automatically updated to match the theme.
- **Customizable base** – Use templates as a starting point for further customization.

## Custom CSS

If you need more specific styles beyond the theme templates, or want to add gradients or other complex styles, you can use custom CSS in the Theme page:

1. Right-click on your bot and inspect the element you want to customize.
2. Identify the CSS class you want to target.
3. Add CSS rules in the **Custom CSS** area of the Theme page.

Examples:

```css
.agent-chat-view {
  border-radius: 40px;
  background-image: linear-gradient(to right, #2b3e13, #8DC26F);
  border: 1px solid grey;
}
```

To style the button:

```css
.agent-button {
  border-radius: 40px;
  background-image: linear-gradient(to right, #FFA500, #FF6347);
}
```

**Pro Tip:** Start with a theme template that's close to your desired look, then add custom CSS for fine-tuning.

More about custom CSS can also be read in the dedicated [Custom CSS](/docs/channels/web/custom-css) page.

:::tip For Technical Users
You can also customize the theme using props directly on the agent embed widget. This is useful if you want to avoid visiting the PD app, host your own backend, or dynamically update the theme at run time.
:::

