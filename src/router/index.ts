import { Navigate, RouteObject } from 'react-router-dom'

const ZXYDiscover = lazy(() => import('@/pages/discover'))
// import ZXYDiscover from '@/pages/discover'
import ZXYRecommend from '../pages/discover/children-pages/recommend'
import ZXYRanking from '../pages/discover/children-pages/ranking'
import ZXYSongs from '../pages/discover/children-pages/songs'
import ZXYDjradio from '../pages/discover/children-pages/djradio'
import ZXYArtist from '../pages/discover/children-pages/artist'
import ZXYArtistDetail from '../pages/discover/children-pages/artist/child-components/artist-list/child-components/artist-detail'
import ZXYAlbum from '../pages/discover/children-pages/album'
import ZXYPlayer from '../pages/player'

import ZXYMine from '@/pages/mine'
import ZXYFocus from '@/pages/focus'
import ZXYSearch from '@/pages/search'
import ZXYSearchSongs from '@/pages/search/child-cpn/search-songs'
import ZXYSearchSinger from '@/pages/search/child-cpn/search-singer'
import ZXYSearchAblum from '../pages/search/child-cpn/search-album'
import ZXYSearchLyric from '../pages/search/child-cpn/search-lyric'
import ZXYSearchPlaylist from '../pages/search/child-cpn/search-playlist'
import ZXYSearchSounddj from '../pages/search/child-cpn/search-sounddj'
import ZXYSearchUser from '../pages/search/child-cpn/search-user'
import ZXYSearchVideo from '../pages/search/child-cpn/search-video'
import { lazy } from 'react'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: ZXYDiscover,
    children: [
      {
        path: '/discover',
        element: <Redirect to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <ZXYRecommend />
      },
      {
        path: '/discover/songs',
        element: <ZXYSongs />
      },
      {
        path: '/discover/artist',
        element: <ZXYArtist />
      },
      {
        path: '/discover/ranking',
        element: <ZXYRanking />
      },
      {
        path: '/discover/djradio',
        element: <ZXYDjradio />
      },
      {
        path: '/discover/album',
        element: ZXYAlbum
      },
      {
        path: '/discover/player',
        element: ZXYPlayer
      }
    ]
  },
  {
    path: '/mine',
    element: ZXYMine
  },
  {
    path: '/focus',
    element: ZXYFocus
  },
  {
    path: '/search',
    element: ZXYSearch,
    children: [
      {
        path: '/search',
        element: <Navigate to="/search/songs" />
      },
      {
        path: '/search/songs',
        element: ZXYSearchSongs
      },
      {
        path: '/search/singer',
        element: ZXYSearchSinger
      },
      {
        path: '/search/album',
        element: ZXYSearchAblum
      },
      {
        path: '/search/lyric',
        element: ZXYSearchLyric
      },
      {
        path:element'/search/playlist',
        component: ZXYSearchPlaylist
      },
      {
        path: '/search/sounddj',
        element: ZXYSearchSounddj
      },
      {
        path: '/search/video',
        element: ZXYSearchVideo
      },
      {
        path: '/search/user',
        element: ZXYSearchUser
      }
    ]
  },
  {
    path: '/artistDetail',
    element: ZXYArtistDetail
  }
]

export default routes
