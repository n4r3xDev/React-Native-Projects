import { Audio } from "expo-av";
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const diceList = [
    require("../assets/images/d1.png"),
    require("../assets/images/d2.png"),
    require("../assets/images/d3.png"),
    require("../assets/images/d4.png"),
    require("../assets/images/d5.png"),
    require("../assets/images/d6.png"),
];

const sound = {
    win: require("../assets/audio/levelup.mp3"),
    lose: require("../assets/audio/wrong.mp3"),
}

const msg = {
  winMsg: "You Won!",
  loseMsg: "You Lost!",
}

export default function DiceGame() {
    const WINNING_POINT = 100;
    const LOSING_POINT = 100;
    const MISS_TARGET = 5;
    const router = useRouter();
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [sum, setSum] = useState(0);
    const [target, setTarget] = useState(0);
    const [isFirstRoll, setIsFirstRoll] = useState(true);
    const [status, setStatus] = useState("");
    const [isGameRunning, setIsGameRunning] = useState(true);
    const [isGameOver, setItsGameOver] = useState(false);
    const {initialPoint} = useLocalSearchParams();
    const [point, setPoint] = useState(Number.parseInt(initialPoint as string));
    const firstRollWinningComb = [7, 11];
    const firstRollLosingComb = [2, 3, 12];

    async function playSound(file: number) {
      if (file) {
        const { sound } = await Audio.Sound.createAsync(file);
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate(status => {
          if (status.isLoaded && status.didJustFinish) {
            sound.unloadAsync();
          }
        })
      } else {
        console.warn("Invalid sound file")
      }
    }
    
    useEffect(() => {
      if (point <= 0) {
        setItsGameOver(true);
      }
    })

    useEffect(() => {
      if (!isFirstRoll) {
        setSum(index1 + index2 + 2);
      }
    }, [index1, index2]);

    useEffect(() => {
      if (target > 0) {
        if (sum === target) {
          setStatus(msg.winMsg);
          setIsGameRunning(false);
          setPoint(point + WINNING_POINT);
          playSound(sound.win);
        } else if (sum === 7) {
          setStatus(msg.loseMsg);
          setIsGameRunning(false);
          setPoint(point - LOSING_POINT);
          playSound(sound.lose);
        } else {
          setPoint(point - MISS_TARGET);
        }
      } else {
        if (firstRollWinningComb.includes(sum)) {
        setStatus(msg.winMsg);
        setIsGameRunning(false);
        setPoint(point + WINNING_POINT);
        playSound(sound.win);
      } else if (firstRollLosingComb.includes(sum)) {
        setStatus(msg.loseMsg);
        setIsGameRunning(false);
        setPoint(point - LOSING_POINT);
        playSound(sound.lose);
      } else {
        setTarget(sum);
      }
      }
    }, [sum]);

  function generateRandomIndex() {
    return Math.floor(Math.random() * 6);
  }

    function rollTheDice() {
      setIndex1(generateRandomIndex());
      setIndex2(generateRandomIndex());
      isFirstRoll && setIsFirstRoll(false);
    }

  return (
    <View style={styles.container}>
      <View style={styles.diceRow}>
        <Image source={diceList[index1]} style={styles.dice} />
        <Image source={diceList[index2]} style={styles.dice} />
      </View>
      {status && <Text style={styles.statusTxt}>{status}</Text>}
      <View style={styles.scoreboard}>
        <Text style={styles.pointTxt}>Your Point: {point}</Text>
        <Text style={styles.sumTxt}>Dice Sum: {sum}</Text>
        {target > 0 && <Text style={styles.targetTxt}>Next Target: {target}</Text>}
      </View>
      {isGameOver && (<TouchableOpacity onPress={() => {
        router.replace("/");
      }} style={styles.btn}>
          <Text style={styles.btnTxt}>BACK TO HOME</Text>
        </TouchableOpacity>)}
      {!isGameOver && (<View>
        <TouchableOpacity disabled={!isGameRunning} onPress={rollTheDice} style={[styles.btn, !isGameRunning && styles.btnDisabled]}>
          <Text style={styles.btnTxt}>ROLL</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={isGameRunning} onPress={reset} style={[styles.btn, isGameRunning && styles.btnDisabled]}>
          <Text style={styles.btnTxt}>RESET</Text>
        </TouchableOpacity>
      </View>) }
    </View>
  );
  function reset() {
    setIndex1(0);
    setIndex2(0);
    setSum(0);
    setIsFirstRoll(true);
    setStatus("");
    setIsGameRunning(true);
    setTarget(0);
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    diceRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dice: {
      width: 70,
      height: 70,
      margin: 5,
    },
    btn: {
      backgroundColor: "black",
      width: 150,
      height: 60,
      borderRadius: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
    },
    btnTxt: {
      fontSize: 16,
      color: "white",
    },
    pointTxt: {
      fontSize: 18,
      color: "grey",
    },
    sumTxt: {
      fontSize: 22,
    },
    scoreboard: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    statusTxt: {
      fontSize: 60,
    },
    btnDisabled: {
      backgroundColor: "grey",
      opacity: 0.5,
    },
    targetTxt: {
      fontSize: 30,
      color: "green",
    }
});

//At the first roll, if the dice sum is 7 or 11, player wins!
//At the first roll, is the dice sum is 2, 3, or 12, player loses!
//At the first roll, if the dice sum is 4, 5, 6, 8, 9, 10, sum becomes the new target.
// After we have a target,
// If the dice sum matches the target, player wins!
// While chasing the target, if the sum is 7, player loses!