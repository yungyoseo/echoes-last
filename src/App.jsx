import { Container, Heading, Separator, Stack, Text, Box, For } from '@chakra-ui/react';

function App() {
    const setList_1 = [
        'Love is Dangerous',
        'Drowning',
        'Let me go!',
        'A.P.T.',
        'Kidd',
        '사랑으로',
        'Find me!',
        '지구가 태양을 네 번',
        '앞으로'
    ]

    const setList_2 = [
        '풍문으로 들었소',
        'Hysteria',
        'Creep',
        'Tomboy',
        'Wake me up when September ends',
        'Unholy',
        'Hollywood movie star',
        '나의 머리는 녹색',
        '은방울',
        '손대지마'
    ]

  return (
    <Container alignItems={'center'} paddingBlock={8}>
        <Heading as='h1' fontSize={'4xl'} mb={4} color={'red.500'}>
            Echoes Last Concert
        </Heading>

        <Stack gap={8} align='start' mx={8} paddingBlock={8}>
            <Text fontSize="lg">
                Echoes 라스트 콘서트에 오신 모든 여러분들을 환영합니다.
            </Text>
            <Separator />

            <Heading fontWeight={'bold'}>Part 1.</Heading>
            <Box as='ul' listStyleType={'circle'}>
                <For each={setList_1}>
                    {(song) => (
                    <li>
                        <Text key={song} fontSize="lg">
                            {song}
                        </Text>
                    </li>
                    )}
                </For>
            </Box>

            <Separator />

            <Heading alignSelf={'center'} fontWeight={'bold'}>Part 2.</Heading>
            <Box as='ul' listStyleType={'circle'} mx='12'>
                <For each={setList_2}>
                    {(song) => (
                        <li>
                        <Text key={song} fontSize="lg">
                            {song}
                        </Text>
                        </li>
                    )}
                </For>
            </Box>
        </Stack>

    </ Container>
  )
}

export default App
