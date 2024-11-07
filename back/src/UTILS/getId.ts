const contId = (firstId: number) => {
    let id = firstId;
    return (): number => {
        id+=1;
        return id;
    }
}

export default contId;