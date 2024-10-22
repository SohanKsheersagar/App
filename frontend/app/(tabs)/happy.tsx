import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HappyScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F8E1A8', dark: '#4A3F35' }}
      headerImage={<Ionicons size={310} name="heart" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Find Your Happiness</ThemedText>
      </ThemedView>
      <ThemedText>Discover joy in the little things and find your match!</ThemedText>
      
      {/* Collapsible Section 1 */}
      <Collapsible title="What makes a happy relationship?">
        <ThemedText>
          A happy relationship is built on trust, communication, and shared values. Here are some tips:
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          1. Respect each other's individuality.
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          2. Laugh together often.
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          3. Be open and honest about your feelings.
        </ThemedText>
        <ExternalLink href="https://www.psychologytoday.com/intl/basics/relationships">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Collapsible Section 2 */}
      <Collapsible title="Date Ideas for a Happy Time">
        <ThemedText>
          Looking for ways to connect? Try these date ideas to spark joy in your relationship:
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Coffee and Conversations:</ThemedText> Take time to chat over coffee in a cozy café.
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Outdoor Adventure:</ThemedText> Explore nature together on a hike or walk through the park.
        </ThemedText>
        <Image source={require('@/assets/images/date-idea.png')} style={{ alignSelf: 'center', height: 100, width: 100 }} />
      </Collapsible>

      {/* Collapsible Section 3 */}
      <Collapsible title="The Key to Balance">
        <ThemedText>
          Achieving balance in life and relationships is key. Practice mindfulness, support each other's goals, and remember to make time for both individual and shared activities.
        </ThemedText>
        <ThemedText>
          Whether it's work or family commitments, find ways to keep the relationship a priority.
        </ThemedText>
        <ExternalLink href="https://www.lifehack.org/articles/communication/how-maintain-balanced-relationship.html">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Collapsible Section 4 */}
      <Collapsible title="Spread Happiness">
        <ThemedText>
          Share love and positivity with the people around you. Whether it's a kind word, a thoughtful gesture, or just a smile, spreading happiness can improve not only your relationship but your overall well-being.
        </ThemedText>
        <ExternalLink href="https://www.happify.com/">
          <ThemedText type="link">Start Spreading Happiness</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Collapsible Section 5 */}
      <Collapsible title="Surprise with Animations">
        <ThemedText>
          Want to surprise your partner? Add a fun animation to express your feelings! Here's a cute animation idea:
        </ThemedText>
        <ThemedText>
          You can create a waving hand or a heart animation to show how much they mean to you. Check out the{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> for inspiration.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              Add a parallax effect using the{' '}
              <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText> component to make it extra special.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#FFB6C1',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
