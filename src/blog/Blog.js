import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: '꽃보다', url: '#' },
  { title: '아름답고', url: '#' },
  { title: '우아한', url: '#' },
  { title: '정인아', url: '#' },
  { title: '사랑해', url: '#' },
  // { title: '사랑해', url: '#' },
  // { title: '바치는', url: '#' },
  // { title: '200일', url: '#' },
  // { title: '기념', url: '#' },
  // { title: '페이지', url: '#' },
];

const mainFeaturedPost = {
  title: '자기! 200일간 함께 해줘서',
  description:
    "고맙고 사랑해!!",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: '2024.05.01 윈체스트 야간 라운딩',
};

const featuredPosts = [
  {
    title: '크리스마스 이브 데이트',
    date: '2023.12.24',
    description:
      '빨간색 초록색 옷 맞춰입고 데이트 했던 날 정인이가 맛있는 양식 사줘서 배터지게 먹고 스크린 치러간 날 같이 맞는 첫 생일을 기념하며 행복했던날^^',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/1.jpg'
  },
  {
    title: '돈까스-코인노래방 데이트',
    date: '2023.12.30',
    description:
      '돈까스가 먹고싶다던 날 위해 돈까스 같이 먹어주고 소화시키러 코인노래방 갔던 날! 눈이 많이와서 정인이가 많이 신났던 날^^',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/2.jpg'
  },
  {
    title: '루트52 함께 첫 라운딩!',
    date: '2024.02.17',
    description:
      '함께한 첫 라운딩 공 안맞는다고 기분도 안좋아지고 힘들었었는데, 정인이의 홀컵 뿌셔버린다는 말에 감동먹고 마음 다잡은날 이 날 한번 더 크게 반했어',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/3.jpg'
  },
  {
    title: '포천 여행',
    date: '2024.03.02',
    description:
      '태안에서 풀빌라가 너무 좋았어서 급하게 일정잡고 간 포천 펜션 여행 고기 굽는 연습을 제대로 했고, 물에서 놀다가 힘들어서 둘 다 일찍 잠들어버린 날',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/4.jpg'
  },
  {
    title: '조선펠리스 뷔페 데이트',
    date: '2024.03.10',
    description:
      '당근으로 뷔페 식사권을 싸게 구해준 정인이 덕에 배터지게 먹은 날. 이 날 튤립이 진짜 예뻤는데 그 것보다 더 예뻤던 정인이^^ 같이 우영미 커플티셔츠 입고 행복하게 먹방 찍은 날.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/5.jpg'
  },
  {
    title: '큐로CC 정기라운딩',
    date: '2024.03.23',
    description:
      '정인이랑 같이 간 라운딩 어떤 옷을 입어도 잘 어울리는 정인이 라운딩 하면서 정인이만 졸졸 따라다녔고, 이 날도 너무 예뻐서 즐거웠던 날^^',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/6.jpg'
  },
  {
    title: '거제도 출장 & 부산 여행',
    date: '2024.03.26',
    description:
      '밥 먹고 카페갔다가 많이 싸우고, 해운대 걷다가 스티커사진 찍으면서 많이 웃었던 날 나는 너무 웃기게만 나오는데 어떻게 찍어도 예쁘게 나오는 정인이^^',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/7.jpg'
  },
  {
    title: '엘리시안 강촌cc 라운딩',
    date: '2024.04.03',
    description:
      '선혜랑 같이 쳤던 라운딩. 선혜가 정인이 인생 샷 찍어줘서 주니가 구박 많이 받았던 날 ㅜㅜ 앞으로 더 잘 찍어볼게!!!!',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/8.jpg'
  },
  {
    title: '문정동 가든파이브 앞 벚꽃길',
    date: '2024.04.03',
    description:
      '자기는 별로 안좋아하는 사진이지만 나는 너무 마음에 들어서 넣어봐떠!!!',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/10.jpg'
  },
  {
    title: '정인 탄신일',
    date: '2024.04.19',
    description:
      '정인이 생일 기념으로 간 여행 숙소도 너무 좋았고, 너무 재밌었고 무엇보다 정인이 사진이 너무 예쁘게 잘나와서 뿌듯했던 날. 내년 생일도 내가 잘 챙겨줄게 그때도 많은 행복줄 수 있도록 노력하는 성준이가 될게!',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/11.jpg'
  },
  {
    title: '360도CC 정기라운딩',
    date: '2024.04.03',
    description:
      '이것도 정인이가 더 크게 나와서 안좋아하는 사진이지만 내가 좋아하는 정인이 모습이 담겨서 담아봤어. 자기랑 같은 조 못했던 라운딩이라 아쉽지만 그래도 자기랑 추억이 있어!!',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/12.jpg'
  },
  {
    title: '용인 칼리오페 카페 데이트',
    date: '2024.06.09',
    description:
      '정인이가 프사로 바꾼 주니가 찍은 사진!!! 너무 뿌듯해서 담아봤어 그리고 예쁘게 나왔어 사랑해 정인아',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: '/14.jpg'
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="정인아 사랑해" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
