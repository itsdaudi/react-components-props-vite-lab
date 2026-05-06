import react from 'react';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import About from "./components/About";
import Article from "./components/Article"
import { buildErrorMessage } from 'vite';

console.log(blogData);

function App() {
  return (
    <div className="App">
        <Header name ={blogData.name} />
        <About about={blogData.about} />
        <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;