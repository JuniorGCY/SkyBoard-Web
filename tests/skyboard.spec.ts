import { test, expect } from '@playwright/test';

test('deve carregar a página inicial e mostrar o título', async ({ page }) => {
  // 1. O robô navega até o seu site local
  await page.goto('http://localhost:5173');

  // 2. Ele verifica se o título "SkyDash" existe na tela
  const titulo = page.locator('h1');
  await expect(titulo).toContainText('Meu primeiro React PORRA!');
});

test('deve mostrar o card da NASA após o carregamento', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // 3. Ele procura por um texto que indicaria que o card carregou
  // Note: Se você estiver com erro 429, o teste vai falhar e te avisar!
  const card = page.locator('.MuiCard-root'); 
  await expect(card).toBeVisible();
});