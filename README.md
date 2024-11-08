# 🛠️ Projeto de Automação com Gulp

Este projeto utiliza o **Gulp** para automação de tarefas de desenvolvimento, como compilação de arquivos Sass, minificação de JavaScript, compressão de imagens e criação de sourcemaps. Além disso, ferramentas como **ESLint** e **Prettier** são utilizadas para garantir a qualidade e a formatação do código.

## 📦 Dependências

### **1. @eslint/js** `^9.14.0`
   - **Função**: Fornece o parser oficial do ESLint para JavaScript, permitindo que ele valide e analise o código JS.

### **2. eslint** `^9.14.0`
   - **Função**: Verifica o código JavaScript em busca de erros de sintaxe e padrões de codificação incorretos, garantindo boas práticas.

### **3. eslint-config-prettier** `^9.1.0`
   - **Função**: Desativa regras do ESLint que podem entrar em conflito com o Prettier, permitindo que o Prettier formate o código sem conflitos.

### **4. eslint-plugin-prettier** `^5.2.1`
   - **Função**: Executa o Prettier como uma regra do ESLint, o que permite que a formatação automática ocorra enquanto o código é validado.

### **5. globals** `^15.12.0`
   - **Função**: Fornece uma lista de variáveis globais para o ESLint, evitando falsos positivos durante a análise do código.

### **6. gulp** `^4.0.2`
   - **Função**: Ferramenta principal de automação de tarefas. Permite definir e executar tarefas como compilação de Sass, minificação de JavaScript, compressão de imagens, entre outros.

### **7. gulp-imagemin** `^7.1.0`
   - **Função**: Comprime e otimiza imagens (JPEG, PNG, GIF, SVG) para reduzir o tamanho dos arquivos e melhorar o desempenho do site.

### **8. gulp-obfuscate** `^0.2.9`
   - **Função**: Ofusca o código JavaScript, dificultando a leitura e engenharia reversa do código fonte.

### **9. gulp-sass** `^5.1.0`
   - **Função**: Compila arquivos `.scss` (Sass) em CSS. Trabalha com o Dart-Sass (`sass`) para transformar estilos escritos em Sass em CSS compatível com navegadores.

### **10. gulp-sourcemaps** `^3.0.0`
   - **Função**: Gera sourcemaps que ajudam a rastrear o código original durante a depuração no navegador, mesmo após minificação ou compilação.

### **11. gulp-uglify** `^3.0.2`
   - **Função**: Minifica arquivos JavaScript, removendo espaços em branco e comentários, e encurtando nomes de variáveis, melhorando o desempenho e reduzindo o tamanho dos arquivos.

### **12. sass** `^1.80.6`
   - **Função**: Compilador Dart-Sass utilizado pelo `gulp-sass` para transformar arquivos `.scss` em CSS.

---

## 🚀 Como utilizar

### **1. Instale as dependências:**
### **npm install**

### **2. Execute o Gulp para iniciar as tarefas de automação:**
### **npm run gulp**
